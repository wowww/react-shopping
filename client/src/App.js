import React, { useState } from 'react';
import './App.css';
import Products from './components/Products/Products'

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  
  const addToCart = (product) => {
    setCart([...cart, { ...product }])
  }
  

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(product => product !== productToRemove))
  }

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  } 

  // const renderProducts = () => (
    
  // )

  const renderCart = () => (
    <>
      <h1>Cart</h1>
      <div className="products">
        {cart.map((product, index) => (
          <div className="product" key={index}>
            <h3>{product.name} - {product.color}</h3>
            <h4>$ {product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => removeFromCart(product)}>
              Remove
            </button>  
          </div>
        ))}
      </div>
    </>
  )

  return (
    <div className="App">
      <nav>
        <button onClick={() => navigateTo(PAGE_CART)}>Go to Cart({cart.length})</button>  
        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>  
      </nav>
      {page === PAGE_PRODUCTS && <Products addToCart={addToCart} />}
      {page === PAGE_CART && renderCart()}
    </div>
  );
}

export default App;
