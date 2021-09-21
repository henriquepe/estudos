import React, { useRef } from 'react';
import { Text, View, ScrollView, StyleSheet, ScrollViewProps  } from 'react-native';
import { Navigation, NavigationFunctionComponent } from 'react-native-navigation';

// import { Container } from './styles';

const Home: NavigationFunctionComponent = ({componentId}) => {

    const scrollViewRef = useRef<any>(ScrollView);

    Navigation.events().registerBottomTabPressedListener((tabIndex) => {
        

        tabIndex.tabIndex === 0 && scrollViewRef.current?.scrollTo({
            y: 0
        })
    });


    return (
        <ScrollView  contentContainerStyle={{alignItems: 'center', padding: 20}} ref={scrollViewRef}>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
            <Text>Hello Home Page</Text>
        </ScrollView>
    )
}

Home.options = {
    topBar: {
        title: {
            text: 'Home Page',

        },
        backButton: {
            color: 'white'
          },
        background: {
        color: '#4d089a'
        }
    },
    bottomTab: {
        text: 'Home',
        // selectTabOnPress: false
    },
   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20
    }
})



export default Home;