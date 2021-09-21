const express = require('express');
const {v4: uuidv4} = require('uuid'); 


const app = express();
app.use(express.json());

const customers = [];

function getBalance({statement}) {
    const creditStatementOperations = statement.filter(statementOperation => statementOperation.type === 'credit');

    const creditMoney = creditStatementOperations.reduce((accumulator , statementOperation) => {
        
        return accumulator + statementOperation.ammount;
        
    }, 0)

    const debitStatementOperations = statement.filter(statementOperation => statementOperation.type === 'debit');

    const debittMoney = debitStatementOperations.reduce((accumulator , statementOperation) => {
        
        return accumulator + statementOperation.ammount;
        
    }, 0);

    const balance = creditMoney - debittMoney;

    return balance;
}

function verifyIfExistsCustomerCPF (request, response, next) {
    const { cpf } = request.headers;

    const customer = customers.find(customer => customer.cpf === cpf);

    if(!customer){
        return response.status(400).json({error: 'customer does not exists'});
    }

    request.customer = customer;

    next();    
}

app.post('/account', (request, response) => {

    const { cpf, name } = request.body;
    const id = uuidv4();

    const customerAlreadyExist = customers.some(customer => customer.cpf === cpf);

    if(customerAlreadyExist){
        return response.status(400).json({error: 'customer already exists, please check your cpf'});
    }

    customers.push({
        cpf,
        name,
        id,
        statement: [],
    });

    return response.status(201).send();

})

app.get('/statement', verifyIfExistsCustomerCPF ,(request, response) => {

    const { customer } = request;

    return response.status(200).json({
        accountOwner: customer.name,
        accountCPF: customer.cpf,
        statement: customer.statement
    });
})

app.post('/deposit', verifyIfExistsCustomerCPF ,(request, response) => {

    const { customer } = request;
    const { description, ammount } = request.body;

    const deposit = {
        ammount,
        description,
        created_at: new Date(),
        type: 'credit'
    };

    customer.statement.push(deposit);

    return response.send();

})

app.post('/withdraw', verifyIfExistsCustomerCPF ,(request, response) => {
    const { customer } = request;
    const { ammount } = request.body;

    // fazer o saque apenas se tiver saldo
    const balance = getBalance({statement: customer.statement});

    if(balance >= ammount) {

        const withDraw = {
            ammount,
            created_at: new Date(),
            type: 'debit'
        }
    
        customer.statement.push(withDraw);

        return response.send();

    } else {
        return response.status(400).json({
            error: 'balance is not enough to withdraw', 
            balance: balance, 
            triedWithDraw: ammount
        });
    }

})

app.get('/statement/date', verifyIfExistsCustomerCPF ,(request, response) => {

    const { customer } = request;
    const { date } = request.query;

    const formatedDate = new Date(date + " 00:00");

    const statement = customer.statement.filter(statementOperation => {
        return statementOperation.created_at.toDateString() === new Date(formatedDate).toDateString();
    })

    if (!statement) {
        return response.status(400).json({error: 'operation not found in statement for this date'})
    }

    
    return response.status(200).json({statement});
})

app.put('/account', verifyIfExistsCustomerCPF ,(request, response) => {
    const { customer } = request;

    const { name } = request.body;

    customer.name = name;

    return response.status(201).send();
})

app.delete('/account', verifyIfExistsCustomerCPF ,(request, response) => {
    const { customer } = request;

    customers.splice(customer, 1);

    return response.status(200).json({customers});
})

app.get('/account/balance', verifyIfExistsCustomerCPF, (request, response) => {
    const {customer} = request;

    const balance = getBalance({statement: customer.statement});

    return response.status(200).json({balance});
})

app.listen(3333, () => {

    console.log('server funcionando na porta 3333');

})