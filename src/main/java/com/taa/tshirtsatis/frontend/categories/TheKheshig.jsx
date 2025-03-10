import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './TheKheshig.css';

const TheKheshig = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'The Kheshig Oversize Sweatshirt',
      price: '₺1,749.00',
      image: '',
      brand: 'Bucata'
    },
    {
      id: 2,
      name: 'The Kheshig Oversize Tshirt - Siyah',
      price: '₺990.00',
      image: '',
      brand: 'Bucata'
    },
    {
      id: 3,
      name: 'The Kheshig Oversize Tshirt - Beyaz',
      price: '₺990.00',
      image: '',
      brand: 'Bucata'
    }
  ]);

  return (
    <div className="kheshig-container">
      <div className="kheshig-header">
        <h1>The Kheshig</h1>
        <span className="product-count">3 ürün</span> 
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
            </Link>
            <div className="product-info">
              <div className="product-brand">{product.brand}</div>
              <div className="product-name">{product.name}</div>
              <div className="product-price">{product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheKheshig;