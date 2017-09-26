import React from 'react';
import { expect } from 'chai';
import { App } from '../../appContainer/App';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store'

let viewsConfig = [
  // Insert views and their path mappings
  {component: <div>1</div>, path: '/'},
  {component: <div>2</div>, path: '/listView'},
  {component: <div>3</div>, path: 'emptyState'}];

let navbarConfig = {
  // The different tabs and the link to where they are routed to.
  categories: [
    {title: 'Dashboard', link: '/'},
    {title: 'List View', link: '/listView'},
    {title: 'Empty State', link: '/emptyState'},
  ],
  // The title image placed at the top, above nav.
  titleSrc: {
    path: '../static/build/img/brand.svg',
    alt: 'Patternfly Demo App'
  }
};

function setup() {
  const props = {
    viewsConfig,
    navbarConfig,
  };
  const enzymeWrapper = shallow(
      <App {...props} />
  );
  return {
    props,
    enzymeWrapper
  }
}

describe('APPCONTAINER -> CONTAINER TEST', () => {
  describe('Header', () => {
    it('Should render without issues.', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).to.have.length(1);
    });
  })
});


