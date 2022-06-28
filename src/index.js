import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import userReducer from "./store/reducers/user";
import songReducer from "./store/reducers/song";
import albumReducer from "./store/reducers/album";
const store = configureStore({
  reducer: {
    usr: userReducer,
    sng: songReducer,
    alb: albumReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
