import React from 'react';
import Routes from './routes';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import appReducer from './ducks/store';

const App = () => {
  const store = createStore(appReducer, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
