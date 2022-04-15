import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import App from "./containers/App";
import pokemonReducer from "./reducers/pokemonReducer";
import { logActions } from "./middlewares";
import "./index.css";
import pokemonSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composerEnhancers = composeAlt(applyMiddleware(sagaMiddleware));
const store = createStore(pokemonReducer, {}, composerEnhancers);

sagaMiddleware.run(pokemonSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
