import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from './Data';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProductList from './ProductList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    // Filter the product based on the id parameter
    const filterProduct = items.find((product) => product.id === parseInt(id));
    setProduct(filterProduct);

    const relatedProducts = items.filter((swarnima) => swarnima.category === filterProduct.category)
    setRelatedProducts(relatedProducts)
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  // Array of indices where to display the rating stars
  const ratingIndices = [1, 2, 6, 7];
  const isRatingItem = ratingIndices.includes(parseInt(id));

  // Array of indices where the canceled rate should be displayed
  const cancelIndices = [1, 2, 4, 6];
  const isCancelItem = cancelIndices.includes(parseInt(id));

  const addToCart = (id, title, description, imgSrc) => {
    const obj = {
      id,
      title,
      description,
      imgSrc
    }


    setCart([...cart, obj]);
    console.log("Cart element = ", cart);
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

  return (
    <>
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
      <div className='container con'>
        <div className='img'>
          <img src={product.imgSrc} alt='' />
        </div>
        <div className='text-center'>
          <Card.Body>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}><Card.Title>{product.title}</Card.Title>
              {isRatingItem && (
                <div className='d-flex justify-content-center small text-warning mb-2'>
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>&#9733;</span>
                  ))}
                </div>
              )}
            </h1>
            <Card.Text>
              {product.description}
              <br />
              {isCancelItem && (
                <>
                  <span className='text-muted' style={{ textDecoration: 'line-through' }}>$20.00</span>
                  {' '}
                  $18.00
                </>
              )}
            </Card.Text>
            <Button onClick={() => addToCart(product.id, product.title, product.description, product.imgSrc)} variant="warning">Add to cart</Button>
          </Card.Body>
        </div>
      </div>
      <h1 className='text-center'>Related Product</h1>
      <ProductList cart={cart} setCart={setCart} items={relatedProducts} />
    </>
  );
};

export default ProductDetail;
