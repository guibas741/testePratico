import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import {SimpleButton, Spinner, Input, LabelWithText} from '../src/components';

it('<SimpleButton>', () => {
  const snap = renderer
    .create(<SimpleButton onPress={jest.fn()}>Clique</SimpleButton>)
    .toJSON();
  expect(snap).toMatchSnapshot();
});

it('<Spinner>', () => {
  const snap = renderer.create(<Spinner />).toJSON();
  expect(snap).toMatchSnapshot();
});

it('<Input>', () => {
  const snap = renderer
    .create(<Input onChangeText={jest.fn()} placeholder="test" value="" />)
    .toJSON();
  expect(snap).toMatchSnapshot();
});

it('<LabelWithText>', () => {
  const snap = renderer
    .create(<LabelWithText label="test" text="test" />)
    .toJSON();
  expect(snap).toMatchSnapshot();
});
