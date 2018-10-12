import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Frontend } from "./components/Frontend"
import { chromosomes_reducer, features_reducer } from './reducers/index'

const root_reducers = combineReducers({
  chromosome: chromosomes_reducer,
  feature: features_reducer
})

const store = createStore(root_reducers)
const rootEl = document.getElementById('frontend_container')

ReactDOM.render(
  <Provider store={store}>
    <Frontend/>
  </Provider>,
  rootEl
);
