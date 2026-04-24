import React from 'react';

function StarRating({ rating }) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map(star => (
      // BUG 9 : was `Math.floor(rating)` which rounds 4.5 → 4, leaving the 5th star empty.
        // Use `Math.round(rating)` so 4.5 rounds up to 5 filled stars.
        <span key={star} className={star <= Math.round(rating) ? 'star filled' : 'star'}>★</span>
      ))}
      <span className="rating-value">({rating})</span>
    </div>
  );
}

export default function ProductCard({ product, onAddToCart, inCart }) {
  return (
    <div className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
        <span className="product-category">{product.category}</span>
      </div>
      <div className="product-body">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <StarRating rating={product.rating} />
        <div className="product-footer">
          <span className="product-price">₹{product.price.toLocaleString('en-IN')}</span>
          <button
            className={`add-btn ${inCart ? 'in-cart' : ''}`}
            onClick={() => onAddToCart(product)}
          >
            {inCart ? '✓ Added' : '+ Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}
