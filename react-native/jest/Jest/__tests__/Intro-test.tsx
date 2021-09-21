// __tests__/Intro-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import {Intro} from '../src/components/Intro';
import {render, fireEvent} from '@testing-library/react-native';

it('render correctly', () => {
  const tree = renderer.create(<Intro />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('render the text Hello with the name of the user', () => {
  const {getByTestId} = render(<Intro />);

  const inputComponent = getByTestId('input');

  const testText = 'Henrique';

  fireEvent.changeText(inputComponent, testText);

  const textComponent = getByTestId('hello');

  expect(textComponent.props.children).toContain('Henrique');
});

it('render the username right side of the message', () => {
  const {getByTestId} = render(<Intro />);

  const inputComponent = getByTestId('input');

  const testText = 'Henrique';

  fireEvent.changeText(inputComponent, testText);

  const textComponent = getByTestId('name');

  expect(textComponent.props.children).toContain('Henrique');
});
