import React, { Component } from 'react';
import { injectIntl, defineMessages } from 'react-intl';

import Header from './Header';
import Products from './Products';
import Product from './Product';
import Footer from './Footer';
import './App.css';

const messages = defineMessages({
    riverTour: {
        id: 'Products.riverTour.name',
        defaultMessage: 'River Tour',
    },
    riverTourDescription: {
        id: 'Products.riverTour.description',
        defaultMessage: 'See the capital from a unique perspective',
    },
    busTour: {
        id: 'Products.busTour.name',
        defaultMessage: 'Bus Tour',
    },
    busTourDescription: {
        id: 'Products.busTour.description',
        defaultMessage: 'Discover everything the city has to offer with an all day pass',
    },
    shard: {
        id: 'Products.shard.name',
        defaultMessage: 'Night in the Shard',
    },
    shardDescription: {
        id: 'Products.shard.description',
        defaultMessage: 'Reach new heights and see London sparkle',
    },
    londonEye: {
        id: 'Products.londonEye.name',
        defaultMessage: 'Private Trip on the London Eye',
    },
    londonEyeDescription: {
        id: 'Products.londonEye.description',
        defaultMessage: 'Scan the London skyline in your own personal capsule',
    },
    museumHopper: {
        id: 'Products.museumHopper.name',
        defaultMessage: 'Must-see Museum Hopper',
    },
    museumHopperDescription: {
        id: 'Products.museumHopper.description',
        defaultMessage: 'Take in the culture at London\'s top attractions',
    },
    londonByNight: {
        id: 'Products.londonByNight.name',
        defaultMessage: 'London By Night',
    },
    londonByNightDescription: {
        id: 'Products.londonByNight.description',
        defaultMessage: 'Find a different side to the capital at night with its many bars and nightclubs',
    },
});

class App extends Component {
  constructor(props) {
    super();

    this.addToBasket = this.addToBasket.bind(this);
    this.removeFromBasket = this.removeFromBasket.bind(this);
    
    this.state = {
      basket: [],
      productList: [
        {
          id: 1,
          name: props.intl.formatMessage(messages.riverTour),
          description: props.intl.formatMessage(messages.riverTourDescription),
          eventDate: new Date(),
          currency: "GBP",
          price: 24,
          image: "/photos/river-tour.jpg"
        },
        {
          id: 2,
          name: props.intl.formatMessage(messages.busTour),
          description: props.intl.formatMessage(messages.busTourDescription),
          eventDate: new Date(),
          currency: "GBP",
          price: 12,
          image: "/photos/bus-tour.jpg"
        },
        {
          id: 3,
          name: props.intl.formatMessage(messages.shard),
          description: props.intl.formatMessage(messages.shardDescription),
          eventDate: new Date(),
          currency: "GBP",
          price: 15.99,
          image: "/photos/night-in-the-shard.jpg"
        },
        {
          id: 4,
          name: props.intl.formatMessage(messages.londonEye),
          description: props.intl.formatMessage(messages.londonEyeDescription),
          eventDate: new Date(),
          currency: "GBP",
          price: 400,
          image: "/photos/london-eye.jpg"
        },
        {
          id: 5,
          name: props.intl.formatMessage(messages.museumHopper),
          description: props.intl.formatMessage(messages.museumHopperDescription),
          eventDate: new Date(),
          currency: "GBP",
          price: 19.99,
          image: "/photos/museum-hopper.jpg"
        },
        {
          id: 6,
          name: props.intl.formatMessage(messages.londonByNight),
          description: props.intl.formatMessage(messages.londonByNightDescription),
          eventDate: new Date(),
          currency: "GBP",
          price: 14.99,
          image: "/photos/london-by-night.jpg"
        }
      ]
    }
  }

  addToBasket(id) {
    const product = this.state.productList.find(product => product.id === id);

    if(product) {
      this.setState(prevState => {
        return {
          basket: [...prevState.basket, product]
        }
      })
    }
  }

  removeFromBasket(id) {
    this.setState(prevState => {
      return {
        basket: prevState.basket.filter(item => item.id !== id)
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Header basket={this.state.basket} />

        <Products>
          
          {Object.keys(this.state.productList).map(index => {
            const product = this.state.productList[index];
            return (
              <Product
                key={product.id}
                image={product.image}
                name={product.name}
                description={product.description}
                currency={product.currency}
                price={product.price}
                addToBasket={() => this.addToBasket(product.id)}
                removeFromBasket={() => this.removeFromBasket(product.id)}
                inBasket={this.state.basket.filter(item => item.id === product.id).length > 0}
              />
            )
          })}
          
        </Products>

        <Footer />
      </div>
    );
  }
}

export default injectIntl(App);
