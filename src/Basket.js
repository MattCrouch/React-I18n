import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';

import Button from './Button';
import './Basket.css';

class Basket extends Component {
  render() {
    return (
        <div>
          <Button>
            <FormattedNumber
              value={0}
              style="currency"
              currency={this.props.currency}
            />
          </Button>
        </div>
    );
  }
}

Basket.propTypes = {
    currency: PropTypes.string
}

Basket.defaultProps = {
    currency: "GBP"
}

export default Basket;
