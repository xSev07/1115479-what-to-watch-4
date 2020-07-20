import {ActionCreator, AuthorizationStatus, Operation as UserOperation} from "./user/user";
import {createAPI} from "../api";
import {applyMiddleware, createStore} from "redux";
import reducer from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {Operation as DataOperation} from "./data/data";
import {AppRoute} from "../const";

const onUnauthorized = (needRedirectToLogin) => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));

  if (needRedirectToLogin) {
    // В таком варианте заново загружает данные (с replace тоже)
    window.location.href = AppRoute.LOGIN;
  }
};

const onAuthError = () => {
  store.dispatch(ActionCreator.setLoginErrorStatus(true));
};

const api = createAPI(onUnauthorized, onAuthError);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadMovies());
store.dispatch(DataOperation.loadPromo());
store.dispatch(UserOperation.checkAuth());

export default store;
