import React, { useState } from 'react';
import './App.css';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

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

  const renderProducts = () => (
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

  const renderCart = () => (
    <>
      <h1>Cart</h1>
      <div className="products">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <h3>{product.name} - {product.color}</h3>
            <h4>$ {product.cost}</h4>
            <img src={product.image} alt={product.name} />
            {/* <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>   */}
          </div>
        ))}
      </div>
    </>
  )

  return (
    <div className="App">
      <nav>
        <button>Go to Cart({cart.length})</button>  
      </nav>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    </div>
  );
}

export default App;
