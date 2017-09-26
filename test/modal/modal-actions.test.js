// TODO
import React from 'react';
import { expect } from 'chai';
import * as actions from '../../modal/modalActions'
import { MODAL } from '../../modal/modalConstants'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

describe('MODAL -> ACTION TESTS', () => {
  it('Should toggle modal.', () => {
    const expectedAction = {
      type: MODAL.TOGGLE_MODAL,
      payload: '001'
    };
    expect(actions.toggleModal('001')).to.deep.equal(expectedAction)
  });
});