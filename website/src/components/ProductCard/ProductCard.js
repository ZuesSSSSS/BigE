import React from "react";
import './styles.scss';

class ProductCard extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    let product = this.props.product ? this.props.product : null;

    if( !product ) {
      return <></>;
    }

    return (
      <div className="column">
        <div className="product-card">
          {
            product.image &&
            <div className="image-container">
              <img className="card-image" src={ product.image } alt={ product.name } />
            </div>
          }
          <div className="card-header">
            <h3 className="card-title">{ product.name }</h3>
            <p className="price">{ product.price }</p>
          </div>
          <div className="card-body">
            <p className="card-text">{ product.description }</p>
          </div>
          <div className="card-footer">
            <button onClick={ () => { this.props.addToCart( product ) } }>Add To cart</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductCard
