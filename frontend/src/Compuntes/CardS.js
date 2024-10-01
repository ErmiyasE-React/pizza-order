import React from 'react';
import CustomCard from './CustomCard';
import cardsData from './cardData.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';  // Import pagination CSS
import './CardS.css';  // Custom styles for pagination

const CardS = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Swiper
        spaceBetween={30}  // Adjust spacing between slides
        slidesPerView={1}  // Show 1 slide at a time
        pagination={{ clickable: true }}  // Enable pagination dots
        style={{ width: '80%', height: '400px' }}  // Adjust width and height
      >
        {cardsData.map((card, index) => (
          <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CustomCard title={card.title} content={card.content} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardS;
