import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Footer from "../footer/footer.jsx";
import LoginForm from "../login-form/login-form.jsx";
import {connect} from "react-redux";
import {getLoginErrorStatus} from "../../reducer/user/selectors";
import {Operation as UserOperation} from "../../reducer/user/user";

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    // TODO: Возможно стоит вынести incorrectEmail в Redux
    this.state = {
      incorrectEmail: false,
    };

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  render() {
    const {authError} = this.props;
    const {incorrectEmail} = this.state;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <LoginForm
            authError={authError}
            incorrectEmail={incorrectEmail}
            onSubmit={this._handleFormSubmit}
          />
        </div>

        <Footer/>
      </div>
    );
  }

  _handleFormSubmit(formData) {
    const {login} = this.props;
    const {loginValue, passwordValue} = formData;

    const emailValid = loginValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (emailValid) {
      this.setState({
        incorrectEmail: false,
      });
      login({
        login: loginValue,
        password: passwordValue,
      });
    } else {
      this.setState({
        incorrectEmail: true,
      });
    }
  }
}

const mapStateToProps = (state) => ({
  authError: getLoginErrorStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});

SignIn.propTypes = {
  authError: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
