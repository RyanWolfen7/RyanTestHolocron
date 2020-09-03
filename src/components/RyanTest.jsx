import React, { useEffect } from 'react';
import { loadLanguagePack, updateLocale } from '@americanexpress/one-app-ducks';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import childRoutes from '../childRoutes';
import { yahooMarketActions } from '../actions/index'
import reducer from '../reducers/index'
import { GET_SUMMARY } from '../types';

export const RyanTest = props => {
  console.log('props\n', props)
  // const { isLoading, marketSummary, error } = useSelector(( state ) => { state.getSummary})
  
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

export const mapDispatchToProps = (dispatch) => ({
  switchLanguage: async ({ target }) => {
    await dispatch(updateLocale(target.value));
    await dispatch(loadLanguagePack('ryan-test', { fallbackLocale: 'en-US' }));
  },
  markets: async ( type ) => {
    await dispatch(yahooMarketActions.getSummary())
  }
});

export const mapStateToProps = (state) => {
  const localeName = state.getIn(['intl', 'activeLocale']);
  const languagePack = state.getIn(
    ['intl', 'languagePacks', localeName, 'ryan-test'],
    fromJS({})
  ).toJS();
  console.log('state', state)
  const yahooMarket = reducer
  console.log('state2', yahooMarket)

  return {
    languageData: languagePack && languagePack.data ? languagePack.data : {},
    localeName
  };
};

// export const loadModuleData = async ({ store, fetchClient , ownProps, module }) => {
//   console.log('store\n', store)
//   console.log('fetchClient\n', fetchClient)
//   console.log('ownProps\n', ownProps)
//   const moduleState = store.getState().getIn(['modules', 'ryan-test'])
//   if (moduleState.get('isComplete') && moduleState.get('data')) {
//     return;
//   }
//   store.dispatch({ type: GET_SUMMARY })
//   const response = await fetchClient(yahooMarket.getSummary())
//   const data = await response.json()
//   store.dispatch({ type: GET_SUMMARY, data})
//   console.log('module\n', module, moduleState)
//   // // If isComplete and data already exists dont run request again
// }

export const loadModuleData = ({ store: { dispatch } }) => { dispatch(loadLanguagePack('ryan-test', { fallbackLocale: 'en-US' }))}

RyanTest.holocron = {
  name: 'ryan-test',
  loadModuleData,
};

export default connect(mapStateToProps, mapDispatchToProps)(RyanTest);
