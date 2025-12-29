import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import '../components/ProductDisplay.css';

const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/api/products`)
      .then(res => res.json())
      .then(data => {
        const decodedCategoryId = decodeURIComponent(categoryId);
        const filtered = data.filter(p => p.category.toUpperCase() === decodedCategoryId.toUpperCase());
        setProducts(filtered);
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to load products from API:", error);
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div style={{ paddingTop: '150px' }}>
      <div className="products-display-container">
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>{decodeURIComponent(categoryId)}</h1>
        {products.length > 0 ? (
          <div className="products-grid">
            {products.map((product) => (
              <div
                key={product.id}
                className="product-card-display"
                onClick={() => navigate(`/produit?id=${product.id}`)}
              >
                <img src={product.image.startsWith('http') ? product.image : product.image} alt={product.name} className="product-image-display" />
                <div className="product-info-display">
                  {product.brand.toUpperCase() !== decodeURIComponent(categoryId).toUpperCase() && 
                    <h4 className="product-brand-display">{product.brand}</h4>
                  }
                  <p className="product-name-display">{product.name}</p>
                  <p className="product-price-display">{product.price} €</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ textAlign: 'center' }}>No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
