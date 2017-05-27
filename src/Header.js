import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, defineMessages } from 'react-intl';

import Basket from './Basket';

import './Header.css';
import logo from './logo.svg';

const messages = defineMessages({
    companyName: {
        id: 'Header.companyName',
        defaultMessage: 'Alternative Text for London Tours logo',
    }
})

class Header extends Component {
  render() {
    return (
        <header className="Header">
            <img src={logo} className="Header_logo" alt={this.props.intl.formatMessage(messages.companyName)} />
            <Basket basket={this.props.basket} />
        </header>
    );
  }
}

Header.propTypes = {
    basket: PropTypes.arrayOf(PropTypes.object).isRequired
}

Header.defaultProps = {
    
}

export default injectIntl(Header);
