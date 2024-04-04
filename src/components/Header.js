import React, { useState } from 'react';
import '../App.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { items } from './Data';


function Header({ setData, cart }) {
  // console.log(useLocation())
  const location = useLocation()
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products by category

  const filterByCategory = (category) => {
    const filteredItems = items.filter((product) => product.category === category);
    setData(filteredItems);
  };

  // Handle search form submission

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm('');
  };

  return (
    <div>
       {/* Navbar with brand logo, navigation links, search bar, and cart */}
      <div className='sticky-top'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <div className="container px-4 px-lg-5">
            <Link to={'/'} className="navbar-brand" href="#!">Start Bootstrap</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="navbar-collapse collapse show" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item"><Link to={'/'} className="nav-link active" aria-current="page" href="/home">Home</Link></li>
                <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#!">All Products</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                    <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                  </ul>
                </li>
              </ul>

                {/* Search bar */}

              <form onSubmit={handleSubmit} className='search_bar'>
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  type='text'
                  placeholder='Search Product'
                />
                <button type="submit" className="btn btn-outline-dark">Search</button>
              </form>

              {/* Cart button */}
              <Link to={'/cart'} className='cart' style={{ textDecoration: 'none' }}>
                <button className="btn btn-outline-dark">
                  <i className="bi bi-cart-fill"></i> Cart
                  <span className="badge bg-dark text-white ms-1 rounded-pill">{cart.length}</span>
                </button>
              </Link>
            </div>
          </div>
        </nav>

        {/* Filter options for product categories */}

        {
          location.pathname === '/' &&(
            <div className='nav-bar-wrapper'>
            <div className='item'>Filter by {'->'}</div>
            <div onClick={() => setData(items)} className='items'>No Filter</div>
            <div onClick={() => filterByCategory('mobiles')} className='item'>Mobiles</div>
            <div onClick={() => filterByCategory('laptops')} className='item'>Laptop</div>
            <div onClick={() => filterByCategory('tablets')} className='item'> Tablet</div>
          </div>
          )
        }

       
      </div>
       {/* Header section for the homepage */}
      {
        location.pathname === '/' && (
          <header className="bg-dark py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">Shop in style</h1>
              <p className="lead fw-normal text-white-50 mb-0">With this shop homepage template</p>
            </div>
          </div>
        </header>
        )
      }

      
    </div>
  );
}

export default Header;
