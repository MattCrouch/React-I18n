import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';

import Button from './Button';
import './BasketView.css';

class BasketView extends Component {
  constructor() {
    super();
  }

  showBasket() {
    return (
      <table className="BasketView_items">
        <thead>
          <tr>
            <th>Item</th>
            <th className="price">Price</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td>Total</td>
            <td className="price">
              <FormattedNumber
                value={this.props.totalCost}
                style="currency"
                currency={this.props.currency}
              />
            </td>
          </tr>
        </tfoot>
        <tbody>
          { this.props.basket.map(item => (
            <tr key={item.id}>
              <td>
                {item.name}
              </td>
              <td className="price">
                <FormattedNumber
                  value={item.price}
                  style="currency"
                  currency={this.props.currency}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
  
  render() {
    const showStyle = {};

    if(this.props.show) {
      showStyle.display = "block";
    }

    let basket;
    if(this.props.basket.length > 0) {
      basket = this.showBasket();
    } else {
      basket = <span>Your basket is empty</span>
    }

    return (
      <div>
        <div className="BasketView_overlay" style={showStyle} onClick={this.props.toggleVisibility}></div>
        <div className="BasketView" style={showStyle}>
          <div className="BasketView_container">
            <Button className="BasketView_close" onClick={this.props.toggleVisibility}>&#10006;</Button>
            { basket }
          </div>
        </div>
      </div>
    );
  }
}

BasketView.propTypes = {
  basket: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalCost: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  toggleVisibility: PropTypes.func.isRequired,
  show: PropTypes.bool,
}

BasketView.defaultProps = {
  show: true
}

export default BasketView;
