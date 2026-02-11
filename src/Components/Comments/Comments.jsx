import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import './Comments.css';

const CheckIcon = () => (
  <span className="check-icon">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
  </span>
);

const Comments = () => {
  const reviews = [
    { id: 1, name: "Sarah M.", text: '"I\'m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I\'ve bought has exceeded my expectations."' },
    { id: 2, name: "Alex K.", text: '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options is truly remarkable."' },
    { id: 3, name: "James L.", text: '"As someone who\'s always on the lookout for unique fashion pieces, I\'m thrilled to have stumbled upon Shop.co."' },
    { id: 4, name: "Michael B.", text: '"The customer service was amazing! They helped me find the perfect size and the shipping was incredibly fast."' },
    { id: 5, name: "Emma W.", text: '"I love the sustainability focus of Shop.co. Knowing that I’m buying eco-friendly fashion makes me feel even better."' }
  ];

  return (
    <div className="comments" id='Comments'>
      <div className="container">
        <h2 className="comments-title">OUR HAPPY CUSTOMERS</h2>
        
        <div className="slider-wrapper">
          <button className="nav-btn prev-btn">←</button>
          
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            navigation={{
              prevEl: '.prev-btn',
              nextEl: '.next-btn',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="comments-swiper"
          >
            {reviews.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="comment-card">
                  <div className="stars">★★★★★</div>
                  <div className="user-name">
                    {item.name} <CheckIcon />
                  </div>
                  <p className="comment-text">{item.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="nav-btn next-btn">→</button>
        </div>
      </div>
    </div>
  );
};

export default Comments;