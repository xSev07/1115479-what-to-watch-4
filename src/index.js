import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {Provider} from "react-redux";
import store from "./reducer/store";

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
