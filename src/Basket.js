import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';

import Button from './Button';
import './Basket.css';

class Basket extends Component {
  constructor() {
    super();
    this.getTotalCost = this.getTotalCost.bind(this);
  }
  getTotalCost() {
    return this.props.basket.reduce((acc, item) => acc + item.price, 0);
  }

  render() {
    return (
        <div>
          <Button>
            <FormattedNumber
              value={this.getTotalCost()}
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
