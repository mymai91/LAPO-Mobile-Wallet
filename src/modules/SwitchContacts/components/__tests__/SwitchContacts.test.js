// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../../../redux';
import SwitchContacts from '../index';

describe('SwitchContacts page', () => {
  test('renders snapshots', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <SwitchContacts />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
