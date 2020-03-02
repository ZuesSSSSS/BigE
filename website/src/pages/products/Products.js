import React from "react";
import { getAllProducts } from '../../services/api';

class Products extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      products: null
    }
  }
  
  async componentDidMount() {
    let products = await getAllProducts();
    if (Array.isArray(products)) {
      this.setState({
        products: products
      })
    }
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

    console.log( this.state.products );

    return (
      <div>
        <h2>Products</h2>
        { 
          this.state.products.map( (product, idx) => {
            return <p key={idx}>{ product.name }</p>
          })
        }
      </div>
    )
  }
}

export default Products
