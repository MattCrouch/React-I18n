import React, { Component } from 'react';

import './Products.css';

class Products extends Component {
  render() {
    return (
        <div className="Products">
            { this.props.children }
        </div>
    );
  }
}

export default Products;
