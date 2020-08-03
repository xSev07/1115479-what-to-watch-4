import React from "react";
import PropTypes from "prop-types";
import {Redirect, Route} from "react-router-dom";
import {AuthorizationStatus} from "../../reducer/user/user";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {AppRoute} from "../../const";
import Loader from "../loader/loader.jsx";

const PrivateRoute = (props) => {
  const {exact, path, render, authStatus} = props;
  if (authStatus === AuthorizationStatus.WAIT_SERVER_RESPONSE) {
    return <Loader/>;
  }

  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          authStatus === AuthorizationStatus.AUTH
            ? render(props)
            : <Redirect to={AppRoute.LOGIN}/>
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authStatus: getAuthorizationStatus(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
