import React from "react";
import "./certifications.css";
import Avatar1 from "../../assets/avatar1.jpg";
import Avatar2 from "../../assets/avatar2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

const data = [
  {
    avatar: Avatar1,
    name: "Test 1",
    review: "This is a review",
  },
  {
    avatar: Avatar2,
    name: "Test 1",
    review: "This is a review",
  },
  {
    avatar: Avatar1,
    name: "Test 1",
    review: "This is a review",
  },
  {
    avatar: Avatar1,
    name: "Test 1",
    review: "This is a review",
  },
  {
    avatar: Avatar1,
    name: "Test 1",
    review: "This is a review",
  },
  {
    avatar: Avatar1,
    name: "Test 1",
    review: "This is a review",
  },
];

const Certifications = () => {
  return (
    <section id="certifications">
      <h5>Review from clients</h5>
      <h2>Certifications</h2>
      <Swiper
        className="container certifications__container"
        pagination={{ clickable: true }}
        slidesPerView={1}
        navigation
        modules={[Pagination, Navigation]}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="certification">
              <div className="certification__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="certification__name">{name}</h5>
              <small className="certification__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Certifications;
