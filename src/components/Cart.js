import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cart({ cart, setCart }) {
  // Function to remove item from cart
  const removeFromCart = (productId) => {
    // Filter out the item with the given productId
    const updatedCart = cart.filter(item => item.id !== productId);
    // Update the cart state with the filtered cart
    setCart(updatedCart);
  };

  return (
    <div className='container my-5' style={{ width: "54%" }}>
      <div className="mb-3">
        <h3>Shopping Cart Items</h3>
        {/* Display the number of items in the cart */}
        <h6> You have  ({cart.length} {cart.length === 1 ? 'item' : 'items'}) in your shopping cart</h6>
      </div>
      {/* If cart is empty, display a message and a link to continue shopping */}
      {cart.length === 0 ? (
        <div className='text-center'>
          <h1>Your cart is empty</h1>
          <Link to={"/"} className='btn btn-warning'>Continue Shopping...</Link>
        </div>
      ) : (
         // If cart is not empty, map through the items and display them
        cart.map((product) => (
          <div key={product.id} className="card mb-3 my-5" style={{ width: '700px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={product.imgSrc} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body text-center">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  {/* Button to remove the item from the cart */}
                  <Button variant="warning" onClick={() => removeFromCart(product.id)}>Remove</Button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      {/* If cart is not empty, display buttons for checkout and clearing the cart */}
      {cart.length !== 0 && (
        <div className='container text-center my-5 ' style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <button className='btn btn-warning mx-5'>Checkout</button>
          {/* Button to clear the cart */}
          <button onClick={() => setCart([])} className='btn btn-danger'>Clear Cart</button>
        </div>
      )}
    </div>
  );
}

export default Cart;

