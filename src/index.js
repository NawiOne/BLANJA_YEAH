import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
// import reduxStore from "./redux/store";
import { store, persiststor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const AppRedux = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persiststor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <AppRedux />
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
