import React, { useState } from 'react';
import './App.css';

function App() {
  const [products] = useState([
    {
      name: 'Magic Keyboard',
      color: '실버',
      cost: '12.99',
      image: '/static/media/MQ052KH.5d2a82a4.jpg',
    },
    {
      name: 'Magic Keyboard',
      color: '스페이스 그레이',
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
      color: '스페이스 그레이',
      cost: '3.99',
      image: '/static/media/MRMF2.459ea8b1.jpg',
    },
  ])
  return (
    <div className="App">
      <h1>Products</h1>
      {products.map((product) => (
        <div>
          <h3>{product.name} </h3>
          <h4>$ {product.cost}</h4>
          <img src={product.image} alt={product.name} />
          <button>Add to Cart</button>  
        </div>
      ))}
    </div>
  );
}

export default App;
