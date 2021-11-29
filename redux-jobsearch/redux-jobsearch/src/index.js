import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import {configureStore, persistor} from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore}>
      <PersistGate loading={null} persistor={persistor}>
       <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
// wrapping App inside Provider enables redux in all nested


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
