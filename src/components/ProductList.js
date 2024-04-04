import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductList({ items, cart, setCart }) {
   // Function to add a product to the cart
  const addToCart = (id, title, description, imgSrc) => {
     // Creating an object representing the product
    const obj = {
       id,
       title,
       description,
       imgSrc
    }

// Updating the cart state by adding the new product
    setCart([...cart, obj]);
    // Logging cart elements to the console
    console.log("Cart element = ", cart); 
    // Displaying a success toast when the product is added to the cart
    toast.success('Item added in cart', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  // Array of indices where to display the rating stars
  const ratingIndices = [1, 3, 6, 7];
  const cancelIndices = [1, 2, 4, 6];

  return (
    <>
     {/* Toast container for displaying notifications */}
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* Product list container */}
      <div className='container my-5'>
        <div className='row'>
          {/* Mapping through each product item */}
          {items.map((product, index) => (
            <div key={index} className='col-lg-3 col-md-6 my-3 text-center'>
              <Card style={{ width: '18rem' }}>
                 {/* Displaying sale badge for specific indices */}
                {(index === 1 || index === 2 || index === 4 || index === 6) && (
                  <div className='badge bg-dark text-white position-absolute' style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                )}
{/* Linking to the product detail page */}
                <Link to={`/product/${product.id}`} style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Card.Img variant="top" src={product.imgSrc} />
                </Link>
                    {/* Product details */}
                <Card.Body>
                  
                  <Card.Title>
                     {/* Product title */}
                    {product.title}
                    {/* Displaying rating stars for specific indices */}
                    {ratingIndices.includes(index) && (
                      <div className='d-flex justify-content-center small text-warning mb-2'>
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>&#9733;</span>
                        ))}
                      </div>
                    )}
                  </Card.Title>
                  <Card.Text>
                    {/* Product description */}
                    {product.description}
                    <br/>
                    {/* Displaying discounted price for specific indices */}
                    {cancelIndices.includes(index) && (
                      <>
                        <span className='text-muted' style={{ textDecoration: 'line-through' }}>$20.00</span>
                        {' '}
                        $18.00
                      </>
                    )}
                  </Card.Text>
                   {/* Button to add product to cart */}
                  <Button onClick={() => addToCart(product.id, product.title, product.description, product.imgSrc)} variant="warning">Add to cart</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;
