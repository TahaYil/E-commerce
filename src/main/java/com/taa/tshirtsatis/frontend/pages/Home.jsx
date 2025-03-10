import React, { useRef } from 'react';
import './Home.css';

const Home = () => {
  // aşağı kaymanın true false u
  const featuredRef = useRef(null);
  
  const scrollToFeatured = () => {
    featuredRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  
  const products = [
    { id: 1, name: "Ürün Adı 1", price: "100₺" },
    { id: 2, name: "Ürün Adı 2", price: "150₺" },
    { id: 3, name: "Ürün Adı 3", price: "120₺" },
  ];

  return (
    //ilk girişteki bucata yazısı
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">BUCATA</h1>
          <p className="hero-subtitle">Yeni Koleksiyon</p>
          <button className="shop-button" onClick={scrollToFeatured}>Alışverişe Başla</button>
        </div>
      </div>
      
      <div className="featured-products" ref={featuredRef}>
        <h2 className="section-title">Öne Çıkan Ürünler</h2>
        <div className="product-grid">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <div className="product-image-placeholder"></div>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='text-view-main'>
      <h1>BUCATA: SAVAŞÇININ YOLU</h1>
    <p>
        Tarih boyunca farklı uygarlıkların farklı savaşçıları belirli kural, düstur ve yaşam kodlarıyla hayatlarını sürdürmüşlerdir. 
    </p>
    <p>
        Bucata, japon savaşçısı samuraiların hayatları boyunca uyması gereken yaşam tarzı kurallarıdır. Onur, sadelik, sadakat ve savaş alanında cesaret gibi erdemler savaşçının yolu; Bucata'yu oluşturuyordu.
    </p>
    <p>
        Biz de Bucata olarak tarihin farklı uygarlıklarının savaşçılarının ruhlarını, özgürlüklerini ve cesaretlerini ürünlerimizle sizlere sunuyoruz...
    </p>
      </div>

      

    </div>
  );
};

export default Home;