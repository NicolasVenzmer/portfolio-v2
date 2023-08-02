import React from "react";
import "./testimonials.css";
import Avatar1 from "../../assets/avatar1.jpg";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: Avatar1,
    name: "Test 1",
    review: "This is a review"
  },
  {
    avatar: Avatar1,
    name: "Test 1",
    review: "This is a review"
  },
  {
    avatar: Avatar1,
    name: "Test 1",
    review: "This is a review"
  },
  {
    avatar: Avatar1,
    name: "Test 1",
    review: "This is a review"
  },
  {
    avatar: Avatar1,
    name: "Test 1",
    review: "This is a review"
  },
  {
    avatar: Avatar1,
    name: "Test 1",
    review: "This is a review"
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container">
      {data.map(({avatar, name, review}, index) =>{
        return (
        <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="Avatar One" />
          </div>
          <h5 className="client__name">{name}</h5>
          <small className="client__review">{review}</small>
        </SwiperSlide>
        )
      })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
