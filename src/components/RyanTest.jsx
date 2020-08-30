import React from 'react';
import { loadLanguagePack, updateLocale } from '@americanexpress/one-app-ducks';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import childRoutes from '../childRoutes';

export const RyanTest = props => {
  console.log(props)

  return (
    <div>
      <h1>Booyah</h1>
    </div>
  );
};

RyanTest.childRoutes = childRoutes;

if (!global.BROWSER) {
  // eslint-disable-next-line global-require
  RyanTest.appConfig = require('../appConfig').default;
}

RyanTest.holocron = {
  name: 'ryan-test'
};

export default RyanTest;
