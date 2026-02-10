import React, { useState } from 'react'
import { Link } from 'react-router-dom' // Yo'naltirish uchun Link komponentini chaqiramiz
import cardData from '../../data'
import './Products.css' 

const Products = () => {
    const [data] = useState(cardData)
    
    // Ketma-ketlik: Men's -> Jewelery -> Electronics -> Women's
    const categories = ["MEN'S CLOTHING", "JEWELERY", "ELECTRONICS", "WOMEN'S CLOTHING"]

    return (
        <div className="products-page">
            <div className="container">
                {categories.map((cat) => (
                    <div key={cat} className="category-section">
                        <h2 className="main-title">{cat}</h2>
                        <div className="products-grid">
                            {data
                                .filter(item => item.category === cat)
                                .map(product => (
                                    /* Har bir cardni Link bilan o'raymiz. 
                                       'to' atributi App.jsx dagi /product/:id yo'liga mos kelishi kerak 
                                    */
                                    <Link to={`/product/${product.id}`} key={product.id} className="product-card-link">
                                        <div className="product-card">
                                            <div className="image-box">
                                                <img src={product.image} alt={product.title} />
                                            </div>
                                            <h3 className="product-title">{product.title}</h3>
                                            <p className="rating-stars">★ {product.rating}</p>
                                            <div className="price-row">
                                                <span className="new-price">${product.price}</span>
                                                <span className="old-price">${product.sale}</span>
                                                <span className="discount-tag">-{product.percent}%</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products