import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Frontend } from "./components/Frontend";
import { root_reducers } from "./reducers/index";

const store = createStore(root_reducers);
const rootEl = document.getElementById("frontend_container");

ReactDOM.render(
  <Provider store={store}>
    <Frontend />
  </Provider>,
  rootEl,
);
