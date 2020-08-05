import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {AuthorizationStatus} from "../../reducer/user/user";
import {extendObject} from "../../utils/common/common";

const PrivateLink = (props) => {
  const {userAuthorized, className, children} = props;
  const attributes = extendObject({}, props);
  delete attributes.userAuthorized;
  delete attributes.children;
  delete attributes.dispatch;

  return (
    userAuthorized ?
      <button
        {...attributes}
      >
        {children}
      </button>
      :
      <Link
        to={AppRoute.LOGIN}
        className={className}
      >
        {children}
      </Link>
  );
};

PrivateLink.propTypes = {
  userAuthorized: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

const mapStateToProps = (state) => ({
  userAuthorized: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
});

export {PrivateLink};
export default connect(mapStateToProps)(PrivateLink);
