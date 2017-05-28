import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedNumber } from 'react-intl';

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
            <th>
              <FormattedMessage
                id='BasketView.item'
                description='Label for the item in the basket'
                defaultMessage='Item'
              />
            </th>
            <th className="price">
              <FormattedMessage
                id='BasketView.price'
                description='Label for the price of an item in the basket'
                defaultMessage='Total'
              />
            </th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td>
              <FormattedMessage
                id='BasketView.total'
                description='Label for the total value of the basket'
                defaultMessage='Total'
              />
            </td>
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
      basket = <FormattedMessage
        id='BasketView.emptyBasket'
        description='The user has an empty basket'
        defaultMessage='Your basket is empty'
      />
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
