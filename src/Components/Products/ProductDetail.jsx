import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../Cart/CartContext'; 
import cardData from '../../data';

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = cardData.find(item => item.id === Number(id));

    if (!product) return <div className="container" style={{padding: '50px'}}><h2>Mahsulot topilmadi!</h2></div>;

    return (
        <div className="container">
            <div className="detail-wrapper" style={{ display: 'flex', gap: '40px', padding: '40px 0' }}>
                <div style={{ flex: 1, backgroundColor: '#F0EEED', borderRadius: '20px', padding: '40px' }}>
                    <img src={product.image} alt={product.title} style={{ width: '100%', maxHeight: '500px', objectFit: 'contain' }} />
                </div>
                <div style={{ flex: 1 }}>
                    <h1 style={{ fontSize: '40px', fontWeight: '900' }}>{product.title}</h1>
                    <p style={{ color: '#FFC633', fontSize: '20px' }}>★ {product.rating}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', margin: '20px 0' }}>
                        <span style={{ fontSize: '32px', fontWeight: 'bold' }}>${product.price}</span>
                    </div>
                    <hr />
                    <button 
                        onClick={() => addToCart(product)}
                        style={{ width: '100%', padding: '16px', backgroundColor: 'black', color: 'white', borderRadius: '50px', border: 'none', cursor: 'pointer', marginTop: '20px', fontWeight: '600' }}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;