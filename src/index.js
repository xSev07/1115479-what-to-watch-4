import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {applyMiddleware, createStore} from "redux";
import {ActionCreator, AuthorizationStatus, Operation, reducer} from "./reducer";
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

store.dispatch(Operation.loadMovies());

// TODO:
//  1. Подключить App к store и получить весь список фильмов
//  2. Заменить генерацию ссылок картинок на реальные данные (появились в адаптере)
//  3. Получить промо фильм с сервера
//  4. Подумать, что делать, пока загружаются фильмы

const promoMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <Provider store={store}>
      <App
        promoMovie={promoMovie}
      />
    </Provider>,
    document.querySelector(`#root`)
);

