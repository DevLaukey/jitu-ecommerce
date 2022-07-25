import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { productName } = useParams()
  const baseURL = "http://localhost:3005";
  const [productDetails, setProductDetails] = useState()
  useEffect(() => {
    setProductDetails([]);
    // let rows, total = 0;
    axios
      .get(
        `${baseURL}/products?page=1&size=1&search=${productName ? productName : ""
        }`
      )
      .then((response) => {
        setProductDetails(response.data.records);
        // total = response.data.filtered;
        // rows = response.data.records.length;
      });
  }, [productName]);
  return (productDetails.map((product) => (
    <>
      {product.productName}
    </>
  )

  ))
}
export default ProductDetails