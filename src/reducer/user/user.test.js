import {ActionCreator, ActionType, AuthorizationStatus, Operation, reducer} from "./user";
import {BASE_SERVER_URL, createAPI} from "../../api";
import MockAdapter from "axios-mock-adapter";

const api = createAPI(() => {});

describe(`Check user reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      avatar: ``,
      loginError: false,
      incorrectEmail: false,
      incorrectPassword: false,
    });
  });

  it(`Reducer should update status`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH
    });
  });

  it(`Reducer should update avatar`, () => {
    expect(reducer({
      avatar: ``,
    }, {
      type: ActionType.ADD_AVATAR,
      payload: `url`
    })).toEqual({
      avatar: `url`
    });
  });

  describe(`Check action creator work correctly`, () => {
    it(`Action creator for require authorization returns correct action`, () => {
      expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.NO_AUTH,
      });
    });

    it(`Action creator for add avatar returns correct action`, () => {
      expect(ActionCreator.addAvatar(`url`)).toEqual({
        type: ActionType.ADD_AVATAR,
        payload: `url`,
      });
    });
  });
});

describe(`Operation in user reducer work correctly`, () => {
  const userData = {
    id: 1,
    email: `Oliver.conner@gmail.com`,
    name: `Oliver.conner`,
    [`avatar_url`]: `/img/1.png`
  };

  it(`should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authChecking = Operation.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, userData);

    return authChecking(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.ADD_AVATAR,
          payload: `${BASE_SERVER_URL}/img/1.png`,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`should make a correct API call to /login GET`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authChecking = Operation.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, userData);

    return authChecking(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.ADD_AVATAR,
          payload: `${BASE_SERVER_URL}/img/1.png`,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`should make a correct API call to /login POST`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logining = Operation.login({
      login: `Oliver.conner@gmail.com`,
      password: `123ItIsABadPassword`,
    });

    apiMock
      .onPost(`/login`, {
        email: `Oliver.conner@gmail.com`,
        password: `123ItIsABadPassword`
      })
      .reply(200, userData);

    return logining(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_LOGIN_ERROR_STATUS,
          payload: false,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.ADD_AVATAR,
          payload: `${BASE_SERVER_URL}/img/1.png`,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });
});
