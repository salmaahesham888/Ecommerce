import React, { useState, useContext } from 'react';
import './productdisplay.css';
import star_icon from '../assests/star_icon.png';
import { ShopContext } from "../context/ShopContext";
import { useNavigate, useParams } from 'react-router-dom';


const ProductDisplay = () => {

  const { all_product, addToCart } = useContext(ShopContext);
  const navigate = useNavigate();
  const { productId } = useParams();

  const product = all_product.find(
    (item) => item.id === Number(productId)
  );

  const [selectedSize, setSelectedSize] = useState('M');

  const handleAddToCart = () => {
    addToCart(product.id, selectedSize);
    navigate('/cart');
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className='productdisplay'>

      {/* LEFT SIDE */}
      <div className="productdisplay-left">

        {/* الصور الصغيرة */}
        <div className="productdisplay-img-list">
          {[1,2,3,4].map((item) => (
            <img
              key={item}
              src={product.image}
              className="productdisplay-thumb"
              alt="thumb"
            />
          ))}
        </div>

        {/* الصورة الكبيرة */}
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt="main"
          />
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="productdisplay-right">

        <h1>{product.name}</h1>

        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
        </div>

        <div className="productdisplay-right-prices">
          <div>${product.old_price}</div>
          <div>${product.new_price}</div>
        </div>

        <div className="productdisplay-right-description">
          {product.description}
        </div>

        {/* SIZE */}
        <div className="productdisplay-right-size">
          <h3>Select Size</h3>

          <div className="productdisplay-right-sizes">
            {['S','M','L','XL','XXL'].map((size) => (
              <div
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`size-box ${selectedSize === size ? 'active' : ''}`}
              >
                {size}
              </div>
            ))}
          </div>

          <div className="selected-size">
            Selected: <b>{selectedSize}</b>
          </div>
        </div>

        <button onClick={handleAddToCart}>
          ADD TO CART
        </button>

        <p>Category: {product.category}</p>
        <p>Tags: Modern, Latest</p>

      </div>
    </div>
  );
};

export default ProductDisplay;
