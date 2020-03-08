import React from "react";
import { getAllProducts } from '../../services/api';

import { ProductCard, Cart } from '../../components';

class Products extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      products: null,
      cart: {}
    }

    this.addToCart = this.addToCart.bind( this )
    this.removeFromCart = this.removeFromCart.bind( this )
  }
  
  async componentDidMount() {
    let products = await getAllProducts();

    if (Array.isArray(products)) {
      this.setState({
        products: products
      })
    }

  }

  addToCart( product ) {
    let cart = this.state.cart;

    if ( cart[ product.id ] ) {
      cart[ product.id ]['quantity'] += 1;
    } else {
      cart[ product.id ] = {
        quantity: 1,
        data: product
      }
    }
    
    this.setState({cart});
    
    // console.log( cart )
  }

  removeFromCart( productId ) {
    let cart = this.state.cart;

    if ( cart[ productId ] ) {
      cart[ productId ]['quantity'] -= 1;
    }

    if ( cart[ productId ]['quantity'] <= 0 ) {
      delete cart[ productId ]
    }

    this.setState( cart );
  }

  render() {

    if ( this.state.products === null ) {
      return (
        <div>
          <h2>Products</h2>
          <p>Grabbing products...</p>
        </div>
      )  
    }

    // console.log( this.state.products );

    return (
      <div>
        <div>
          <h2>Cart</h2>
          <Cart cart={ this.state.cart } removeFromCart={ this.removeFromCart }/>
        </div>
        <div>
          <h2>Products</h2>
          
          <div className="row">
            { 
              this.state.products.map( (product, idx) => {
                return <ProductCard key={idx} product={ product } addToCart={ this.addToCart } />
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Products
