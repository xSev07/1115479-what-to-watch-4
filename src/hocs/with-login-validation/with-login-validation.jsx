import React, {PureComponent} from 'react';
import {isValidEmail, isValidPassword} from "../../utils/validation/validation";

const withLoginValidation = (Component) => {
  class LoginValidationHoc extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        incorrectEmail: false,
        incorrectPassword: false,
      };

      this.checkValidity = this.checkValidity.bind(this);
    }

    checkValidity({email, password}) {
      const emailValid = isValidEmail(email);
      const passwordValid = isValidPassword(password);
      const formValid = emailValid && passwordValid;

      this.setState({
        incorrectEmail: !emailValid,
        incorrectPassword: !passwordValid,
      });

      return formValid;
    }

    render() {
      const {formValid, incorrectEmail, incorrectPassword} = this.state;
      return (
        <Component
          formValid={formValid}
          incorrectEmail={incorrectEmail}
          incorrectPassword={incorrectPassword}
          checkValidity={this.checkValidity}
          {...this.props}
        />
      );
    }
  }

  return LoginValidationHoc;
};

export default withLoginValidation;
