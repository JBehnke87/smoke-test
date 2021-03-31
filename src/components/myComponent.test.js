import React from 'react';
import MyComponent from './MyComponent';
import renderer from 'react-test-renderer';

test('renders the same way every time', () => {
  const tree = renderer.create( <MyComponent /> ).toJSON();
  expect(tree).toMatchSnapshot();
});