import React from 'react';
import ShowDate from './ShowDate';
import renderer from 'react-test-renderer';

test('test show Date', () => {
  const tree = renderer.create( <ShowDate /> ).toJSON();
  expect(tree).toMatchSnapshot();
});