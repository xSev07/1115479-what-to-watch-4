import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {applyMiddleware, createStore} from "redux";
import reducer from "./reducer/reducer";
import {Provider} from "react-redux";
import {createAPI} from "./api";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {ActionCreator, AuthorizationStatus} from "./reducer/user/user";
import {Operation as DataOperation} from "./reducer/data/data";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadPromo());
store.dispatch(DataOperation.loadMovies());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);

