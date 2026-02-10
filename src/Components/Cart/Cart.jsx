import React from 'react';
import { useCart } from './CartContext';
import './Cart.css'; // Stillarni alohida faylga chiqaramiz

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart } = useCart();

    // Hisob-kitoblar
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const discount = subtotal * 0.2; // 20% chegirma (ixtiyoriy)
    const deliveryFee = subtotal > 0 ? 15 : 0; // Yetkazib berish
    const total = subtotal - discount + deliveryFee;

    return (
        <div className="container cart-page">
            <div className="cart-breadcrumb">
                Home {'>'} <span>Cart</span>
            </div>
            
            <h2 className="cart-main-title">YOUR CART</h2>

            <div className="cart-content">
                {/* Savatdagi mahsulotlar ro'yxati */}
                <div className="cart-items-list">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart">
                            <p>Savatda mahsulotlar yo'q.</p>
                        </div>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <div className="item-details">
                                    <div className="item-img-box">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="item-info">
                                        <h4 className="item-name">{item.title}</h4>
                                        <p className="item-category">Category: {item.category || 'General'}</p>
                                        <p className="item-price">${item.price}</p>
                                    </div>
                                </div>
                                
                                <div className="item-actions">
                                    <button className="delete-btn" onClick={() => removeFromCart(item.id)}>
                                        🗑️
                                    </button>
                                    <div className="quantity-control">
                                        <button onClick={() => updateQuantity(item.id, 'dec')}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 'inc')}>+</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Buyurtma hisobi (Order Summary) */}
                <div className="order-summary">
                    <h3>Order Summary</h3>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span className="bold">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="summary-row discount">
                        <span>Discount (-20%)</span>
                        <span className="bold red">-${discount.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Delivery Fee</span>
                        <span className="bold">${deliveryFee.toFixed(2)}</span>
                    </div>
                    <hr />
                    <div className="summary-row total">
                        <span>Total</span>
                        <span className="bold">${total.toFixed(2)}</span>
                    </div>
                    
                    <div className="promo-code">
                        <input type="text" placeholder="Add promo code" />
                        <button>Apply</button>
                    </div>

                    <button className="checkout-btn">
                        Go to Checkout <span>→</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;