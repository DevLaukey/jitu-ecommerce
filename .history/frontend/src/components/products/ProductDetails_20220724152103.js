import React from 'react'

const ProductDetails = () => {
  const {productName } = useParams()
  return (
    <div>{ productName}</div>
  )
}

export default ProductDetails