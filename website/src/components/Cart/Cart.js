import React from "react";
import './styles.scss';

class Cart extends React.Component {

  render() {

    let cart = this.props.cart ? this.props.cart : null;

    if( !cart ) {
      return <></>;
    }
    
    console.log( cart );

    return (
      <div>
        {
          Object.entries( cart ).map( ([key, value]) => {
            let quantity = value.quantity;
            let product = value.data;
            
            return(
              <div className="cart-item" key={ key }>
                <p>{ product.name }</p>
                <p className="quantity">Quantity: { quantity }</p>
                <button className="button-clear" onClick={ () => { this.props.removeFromCart( product.id ) } }>Remove</button>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Cart
