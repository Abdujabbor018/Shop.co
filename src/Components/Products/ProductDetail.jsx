import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../Cart/CartContext'; 
import productData from '../../ProductData';
import './ProductDetail.css'; 

const ProductDetail = () => {
    const { id } = useParams();
    const { cartItems, addToCart, updateQuantity, removeFromCart } = useCart();
    
    const product = productData.find(item => item.id === Number(id));
    const cartItem = cartItems.find(item => item.id === Number(id));
    const quantity = cartItem ? cartItem.quantity : 0;

    if (!product) return <div className="container"><h2>Mahsulot topilmadi!</h2></div>;

    const handleDecrement = () => {
        quantity > 1 ? updateQuantity(product.id, 'dec') : removeFromCart(product.id);
    };

    return (
        <div className="container pd-wrapper">
            <div className="pd-breadcrumb">
                Home {'>'} Shop {'>'} <span style={{color:'black'}}>{product.category}</span>
            </div>

            <div className="pd-main-content">
                <div className="pd-image-section">
                    <img src={product.image} alt={product.title} />
                </div>

                <div className="pd-info-section">
                    <h1 className="pd-title-text">{product.title}</h1>

                    <div className="pd-rating-box">
                        <span style={{color: '#FFC633'}}>★ ★ ★ ★ ☆</span>
                        <span style={{color: 'rgba(0,0,0,0.6)'}}>{product.rating}/5</span>
                    </div>

                    <div className="pd-price-container">
                        <span className="pd-current-price">${product.price}</span>
                        {product.oldPrice && (
                            <>
                                <span className="pd-old-price-text">${product.oldPrice}</span>
                                <span className="pd-discount-label">{product.discount}</span>
                            </>
                        )}
                    </div>

                    <p className="pd-desc">{product.description}</p>

                    <div className="pd-actions">
                        {quantity === 0 ? (
                            <button className="pd-add-btn" onClick={() => addToCart(product)}>
                                Add to Cart
                            </button>
                        ) : (
                            <>
                                <div className="pd-qty-selector">
                                    <button style={{border:'none', background:'none', cursor:'pointer', fontSize:'20px'}} onClick={handleDecrement}>-</button>
                                    <span style={{fontWeight: 700}}>{quantity}</span>
                                    <button style={{border:'none', background:'none', cursor:'pointer', fontSize:'20px'}} onClick={() => updateQuantity(product.id, 'inc')}>+</button>
                                </div>
                                <div className="pd-status-added">Added to Cart ✓</div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;