import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withActiveElement = (Component) => {
  class ActiveElementHoc extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeElement: props.elements[0],
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
    elements: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  return ActiveElementHoc;
};

export default withActiveElement;
