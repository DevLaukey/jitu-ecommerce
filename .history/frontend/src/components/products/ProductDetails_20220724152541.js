import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { productName } = useParams()
   const baseURL = "http://localhost:3005";
const [ProductDetails , setProductDetails] = useState()
   useEffect(() => {
     setProducts([]);
     // let rows, total = 0;
     axios
       .get(
         `${baseURL}/products?page=1&size=1&search=${
           productName ? productName : ""
         }`
       )
       .then((response) => {
         setProductDetails(response.data.records);
         // total = response.data.filtered;
         // rows = response.data.records.length;
       });
   }, [productName]);
  return (
    <div>{ productName}</div>
  )
}

export default ProductDetails