import React, { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('products');

  const [products] = useState([
    {
      name: 'Magic Keyboard',
      color: '실버',
      cost: '12.99',
      image: '/static/media/MQ052KH.5d2a82a4.jpg',
    },
    {
      name: 'Magic Keyboard',
      color: '블랙',
      cost: '13.99',
      image: '/static/media/MRMH2KH.65d0cdfc.jpg',
    },
    {
      name: 'Magic Trackpad',
      color: '실버',
      cost: '2.99',
      image: '/static/media/MJ2R2.a2ca8f6d.jpg',
    },
    {
      name: 'Magic Trackpad',
      color: '블랙',
      cost: '3.99',
      image: '/static/media/MRMF2.459ea8b1.jpg',
    },
  ])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div className="App">
      <nav>
        <button>Go to Cart({cart.length})</button>  
      </nav>
      {page === 'products' && (
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
      )}
    </div>
  );
}

export default App;
