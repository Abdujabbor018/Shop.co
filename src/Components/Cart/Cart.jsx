import React from 'react';
import { useCart } from './CartContext'; 

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart } = useCart();
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className="container" style={{ padding: '40px 0' }}>
            <h2 style={{ fontWeight: '900', fontSize: '36px', marginBottom: '30px' }}>YOUR CART</h2>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ flex: 2, border: '1px solid #E6E6E6', borderRadius: '20px', padding: '20px' }}>
                    {cartItems.length === 0 ? <p>Savat bo'sh</p> : cartItems.map(item => (
                        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid #f0f0f0', paddingBottom: '20px' }}>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <img src={item.image} alt={item.title} width="120" style={{ backgroundColor: '#F0EEED', borderRadius: '10px', padding: '10px' }} />
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: '700' }}>{item.title}</h4>
                                    <p style={{ fontSize: '20px', fontWeight: '700' }}>${item.price}</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                <button onClick={() => removeFromCart(item.id)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '20px', color: 'red' }}>🗑️</button>
                                <div style={{ display: 'flex', alignItems: 'center', background: '#F0F0F0', borderRadius: '50px', padding: '8px 16px', gap: '15px' }}>
                                    <button onClick={() => updateQuantity(item.id, 'dec')} style={{ border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>-</button>
                                    <span style={{ fontWeight: '600' }}>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, 'inc')} style={{ border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>+</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ flex: 1, border: '1px solid #E6E6E6', borderRadius: '20px', padding: '24px' }}>
                    <h3 style={{ marginBottom: '20px', fontWeight: '700' }}>Order Summary</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                        <span>Subtotal</span>
                        <span style={{ fontWeight: '700' }}>${subtotal.toFixed(2)}</span>
                    </div>
                    <hr style={{ border: '0', borderTop: '1px solid #f0f0f0', margin: '20px 0' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '20px', fontWeight: '700' }}>
                        <span>Total</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <button style={{ width: '100%', background: 'black', color: 'white', padding: '16px', borderRadius: '50px', border: 'none', marginTop: '25px', cursor: 'pointer' }}>
                        Go to Checkout →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;