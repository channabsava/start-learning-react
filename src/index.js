import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Cardreducer from "./Reducer/CardReducer.js";
import thunk from "redux-thunk";
import App from "./App";

const creatStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = creatStoreWithMiddleware(Cardreducer);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </Provider>,
  document.getElementById("root")
);
