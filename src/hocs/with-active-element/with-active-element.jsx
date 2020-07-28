import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withActiveElement = (Component) => {
  class ActiveElementHoc extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeElement: props.activeTabDefault,
      };

      this._tabClickHandler = this._tabClickHandler.bind(this);
    }

    render() {
      return (
        <Component
          activeElement={this.state.activeElement}
          onElementClick={this._tabClickHandler}
          {...this.props}
        />
      );
    }

    _tabClickHandler(tab) {
      this.setState({activeElement: tab});
    }
  }

  ActiveElementHoc.propTypes = {
    activeTabDefault: PropTypes.string.isRequired,
  };

  return ActiveElementHoc;
};

export default withActiveElement;
