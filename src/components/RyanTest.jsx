import React from 'react';
import { loadLanguagePack, updateLocale } from '@americanexpress/one-app-ducks';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import childRoutes from '../childRoutes';

export const RyanTest = props => {
  console.log(props)
  // naive solution - up to user on how to load in data
  return (
    <div>
      <h1>Booyah</h1>
    </div>
  );
};

// Read about childRoutes:
// https://github.com/americanexpress/one-app/blob/master/docs/api/modules/Routing.md#childroutes
RyanTest.childRoutes = childRoutes;

// Read about appConfig:
// https://github.com/americanexpress/one-app/blob/master/docs/api/modules/App-Configuration.md
/* istanbul ignore next */
if (!global.BROWSER) {
  // eslint-disable-next-line global-require
  RyanTest.appConfig = require('../appConfig').default;
}

export const mapDispatchToProps = (dispatch) => ({
  switchLanguage: async ({ target }) => {
    await dispatch(updateLocale(target.value));
    await dispatch(loadLanguagePack('ryan-test', { fallbackLocale: 'en-US' }));
  },
});

export const mapStateToProps = (state) => {
  console.log('map to props', state)
  const localeName = state.getIn(['intl', 'activeLocale']);
  const languagePack = state.getIn(
    ['intl', 'languagePacks', localeName, 'ryan-test'],
    fromJS({})
  ).toJS();

  return {
    languageData: languagePack && languagePack.data ? languagePack.data : {},
    localeName,
  };
};

export const loadModuleData = ({ store: { dispatch } }) => { dispatch(loadLanguagePack('ryan-test', { fallbackLocale: 'en-US' }))}

RyanTest.holocron = {
  name: 'ryan-test',
  loadModuleData,
};

export default connect(mapStateToProps, mapDispatchToProps)(RyanTest);
