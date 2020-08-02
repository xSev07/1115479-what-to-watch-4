import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Provider} from "react-redux";
import {SignIn} from "./sign-in";
import configureStore from "redux-mock-store";
import {storeData} from "../../tests-data/tests-data";
import {StaticRouter} from "react-router-dom";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

const store = mockStore(storeData);

describe(`SignIn component`, () => {
  it(`should check form submiting`, () => {
    const onFormSubmit = jest.fn();

    const signIn = mount(
        <Provider store={store}>
          <StaticRouter>
            <SignIn
              userAuthorized={false}
              authError={false}
              incorrectEmail={false}
              incorrectPassword={false}
              handleFormSubmit={onFormSubmit}
            />
          </StaticRouter>
        </Provider>, {
          createNodeMock: () => {}
        }
    );

    const emailInput = signIn.find(`#user-email`);
    emailInput.instance().value = `example@gmail.com`;

    const passwordInput = signIn.find(`#user-password`);
    passwordInput.instance().value = `qwerty`;

    const submitButton = signIn.find(`button.sign-in__btn`);
    submitButton.simulate(`click`);

    expect(onFormSubmit).toHaveBeenCalledTimes(1);
    expect(onFormSubmit).toHaveBeenNthCalledWith(1,
        {
          email: `example@gmail.com`,
          password: `qwerty`,
        });
  });
});
