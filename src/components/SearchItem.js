import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' 
import { items } from './Data';   // Importing sample data
import ProductList from './ProductList';   // Importing ProductList component

function SearchItem({cart,setCart}) {
  const {terms} = useParams();  // Getting search term from URL parameters
  const [filterData, setFilterData] = useState([]);   // State to store filtered data

  useEffect(() => {
    const filteredData = () => {
       // Filtering items based on search term
      const data = items.filter((P)=>P.title.toLowerCase().includes(terms.toLowerCase()));
      setFilterData(data)    // Setting filtered data to state

      
    }
    filteredData(); // Calling filteredData function when search term changes

    
  }, [terms])  // Triggering effect when search term changes
  

  return (
// Rendering ProductList component with filtered data
<ProductList cart={cart} setCart={setCart} items={filterData}/>
    )
}

export default SearchItem