import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedNumber, FormattedDate } from 'react-intl';

import Button from './Button';
import './Product.css';

class Product extends Component {
  render() {
    const styles = {
      backgroundImage: `url(${this.props.image})`
    }

    let basketButton;

    if(this.props.inBasket) {
      basketButton = (
        <Button onClick={this.props.removeFromBasket}>
          <FormattedMessage
            id='Product.removeFromBasket'
            description='Button for remove a product from a basket'
            defaultMessage='Remove from Basket'
          />
        </Button>
      );
    } else {
      basketButton = (
        <Button type="primary" onClick={this.props.addToBasket}>
          <FormattedMessage
            id='Product.addToBasket'
            description='Button for adding a product to a basket'
            defaultMessage='Add to Basket'
          />
        </Button>
      );
    }

    return (
        <div className="Product">
            <div className="Product_image" role="img" style={styles}></div>
            <div className="Product_info">
              <h2>{this.props.name}</h2>
              <p>{this.props.description}</p>
              <div className="date">
                <FormattedDate
                  value={this.props.date}
                  hour12={true}
                  weekday='short'
                  year='numeric'
                  month='long'
                  day='2-digit'
                  hour='numeric'
                  minute='numeric'
                />
              </div>
              <span className="price">
                <FormattedNumber
                  value={this.props.price}
                  style="currency"
                  currency={this.props.currency}
                />
              </span>

              <div className="Product_actions">
                { basketButton }
              </div>
            </div>
        </div>
    );
  }
}

Product.PropTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.objectOf(PropTypes.date),
  addToBasket: PropTypes.func.isRequired,
  removeFromBasket: PropTypes.func.isRequired,
  inBasket: PropTypes.bool
}

Product.defaultProps = {
  name: undefined,
  description: undefined,
  date: new Date(),
  price: 0,
  inBasket: false,
}

export default Product;
