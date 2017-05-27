import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';

import './Button.css';

class Button extends Component {
  render() {
    return (
        <button className={`Button ${this.props.type ? this.props.type : ''}`}>
            { this.props.children }
        </button>
    );
  }
}

Button.propTypes = {
    type: PropTypes.string
}

Button.defaultProps = {
    type: undefined
}

export default Button;
