import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import movies from "./mocks/movies";
import {applyMiddleware, createStore} from "redux";
import {ActionCreator, AuthorizationStatus, reducer} from "./reducer";
import {Provider} from "react-redux";
import {createAPI} from "./api";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

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

const promoMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <Provider store={store}>
      <App
        promoMovie={promoMovie}
        allMovies={movies}
      />
    </Provider>,
    document.querySelector(`#root`)
);

