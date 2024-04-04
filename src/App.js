import './App.css';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SearchItem from './components/SearchItem';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { items } from './components/Data';
import { useState } from 'react';


function App() {
 // State for storing product data and cart items
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])

  return (
    <div>
      <Router>
 {/* Header component with cart and search functionality */}
      <Header cart={cart} setData={setData} />
       {/* Routing for different pages */}
      <Routes>
      <Route path = '/' element={ <ProductList cart={cart} setCart={setCart} items={data}/>} />
        <Route path='/product/:id' element={<ProductDetail cart={cart} setCart={setCart}/>} />
        <Route path='/search/:terms' element={<SearchItem cart={cart} setCart={setCart}/>} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} />
      </Routes>
     
       {/* Footer component */}
      <Footer/>
      </Router>

    </div>
  )
}

export default App

