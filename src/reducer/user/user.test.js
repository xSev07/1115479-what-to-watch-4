import {ActionCreator, ActionType, AuthorizationStatus, reducer} from "./user";

describe(`Check user reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH
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

  describe(`Check action creator work correctly`, () => {
    it(`Action creator for require authorization returns correct action`, () => {
      expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.NO_AUTH,
      });
    });
  });
});
