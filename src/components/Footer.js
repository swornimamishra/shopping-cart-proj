import React from 'react'
import '../App.css';
import { useLocation } from 'react-router-dom';


function Footer() {
  // Get current location using useLocation hook
  const location = useLocation()
  return (
    <div>
    {/* Footer section */}
{
  // Display footer only on the home page
  location.pathname === '/' && (
<footer className="py-5 bg-dark">
        <div className="container px-4 px-lg-5">
          <div className="text-center text-black">
            <p className="m-0 text-center text-white">Copyright © Your Website 2023</p>
          </div>
        </div>
      </footer>
  )
}

    </div>
  )
}

export default Footer 