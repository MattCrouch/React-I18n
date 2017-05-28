import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';

import BasketView from './BasketView';
import Button from './Button';
import './Basket.css';

class Basket extends Component {
  constructor() {
    super();
    
    this.state = {
      showBasket: false
    }
    
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.getTotalCost = this.getTotalCost.bind(this);
  }
  getTotalCost() {
    return this.props.basket.reduce((acc, item) => acc + item.price, 0);
  }

  toggleVisibility() {
    this.setState(prevState => {
      return { showBasket: !prevState.showBasket }
    })
  }
  
  render() {
    return (
      <div>
        <Button onClick={this.toggleVisibility}>
          <FormattedNumber
            value={this.getTotalCost()}
            style="currency"
            currency={this.props.currency}
          />
        </Button>

        <BasketView
          show={this.state.showBasket}
          basket={this.props.basket}
          currency={this.props.currency}
          totalCost={this.getTotalCost()}
          toggleVisibility={this.toggleVisibility}
        />
      </div>
    );
  }
}

Basket.propTypes = {
  basket: PropTypes.arrayOf(PropTypes.object).isRequired,
  currency: PropTypes.string
}

Basket.defaultProps = {
  currency: "GBP"
}

export default Basket;
