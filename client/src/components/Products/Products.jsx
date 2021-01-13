import React, { useState } from 'react'

function Products({ addToCart }) {
  const [products] = useState([
    {
      name: 'Magic Keyboard',
      color: '실버',
      cost: '12.99',
      image: 'https://i.imgur.com/zqJPkeR.jpg',
    },
    {
      name: 'Magic Keyboard',
      color: '블랙',
      cost: '13.99',
      image: 'https://i.imgur.com/2XbWYjH.jpg',
    },
    {
      name: 'Magic Trackpad',
      color: '실버',
      cost: '2.99',
      image: 'https://i.imgur.com/aEzZJnp.jpg',
    },
    {
      name: 'Magic Trackpad',
      color: '블랙',
      cost: '3.99',
      image: 'https://i.imgur.com/9cMLvfF.jpg',
    },
  ])

  return (
    <>
      <h1>Products</h1>
      <div className="products">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <h3>{product.name} - {product.color}</h3>
            <h4>$ {product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>  
          </div>
        ))}
      </div>
    </>
  )
}

export default Products
