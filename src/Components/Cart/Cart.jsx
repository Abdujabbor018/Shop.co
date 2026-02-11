import React, { useState } from 'react'; // useState qo'shildi
import { useCart } from './CartContext';
import './Cart.css';

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart } = useCart();
    
    // Promokod uchun holatlar (state)
    const [promoInput, setPromoInput] = useState('');
    const [discountPercent, setDiscountPercent] = useState(0); 

    // Hisob-kitoblar
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    
    // Promokodni tekshirish funksiyasi
    const handleApplyPromo = () => {
        if (promoInput === 'Islomaka') {
            setDiscountPercent(0.5); 
            alert("Hurmatli Islomaka! Sizga 50% chegirma berildi! 🚀");
        } else if (promoInput.toUpperCase() === 'DISCOUNT20') {
            setDiscountPercent(0.2); 
            alert("20% chegirma muvaffaqiyatli qo'shildi.");
            
        } 
        else {
            setDiscountPercent(0);
            alert("Bunday promokod mavjud emas!");
        }
    };

    const discountAmount = subtotal * discountPercent;
    const deliveryFee = subtotal > 0 ? 15 : 0;
    const total = subtotal - discountAmount + deliveryFee;

    return (
        <div className="container cart-page">
            <div className="cart-breadcrumb">
                Home {'>'} <span>Cart</span>
            </div>
            
            <h2 className="cart-main-title">YOUR CART</h2>

            <div className="cart-content">
                <div className="cart-items-list">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart" style={{textAlign: 'center', padding: '40px'}}>
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

                <div className="order-summary">
                    <h3>Order Summary</h3>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span className="bold">${subtotal.toFixed(2)}</span>
                    </div>

                    {/* Chegirma faqat promokod ishlatilsa ko'rinadi */}
                    {discountPercent > 0 && (
                        <div className="summary-row discount">
                            <span>Discount (-{(discountPercent * 100)}%)</span>
                            <span className="bold red">-${discountAmount.toFixed(2)}</span>
                        </div>
                    )}

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
                        <input 
                            type="text" 
                            placeholder="Add promo code" 
                            value={promoInput}
                            onChange={(e) => setPromoInput(e.target.value)}
                            style={{
                                border: discountPercent === 0.5 ? '2px solid #2e7d32' : 'none'
                            }}
                        />
                        <button onClick={handleApplyPromo}>Apply</button>
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