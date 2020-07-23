import React from "react";
import PropTypes from "prop-types";
import {Redirect, Route} from "react-router-dom";
import {AuthorizationStatus} from "../../reducer/user/user";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {AppRoute} from "../../const";

const PrivateRoute = (props) => {
  const {exact, path, render, authStatus} = props;
  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          authStatus === AuthorizationStatus.AUTH
            ? render()
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
