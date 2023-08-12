import React from "react";
import "./languages.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import US_FLAG from "../../assets/us-flag-icon.svg";
import GERMAN_FLAG from "../../assets/german-flag-icon.svg";
import ARGENTIAN_FLAG from "../../assets/argentinian-flag-icon.svg";

const data = [
  {
    title: "Advanced",
    subtitle: "Oral, Writting and Speaking.",
    image: US_FLAG,
    description:
      "I use English on a daily basis since I use all the tools in this language, both in the workplace and personally.",
    alt: "English Image",
  },
  {
    title: "Native",
    subtitle: "Oral, Writting and Speaking.",
    image: ARGENTIAN_FLAG,
    description: "My everyday language.",
    alt: "Spanish Image",
  },
  {
    title: "Intermediate",
    subtitle: "Oral, Writting and Speaking.",
    image: GERMAN_FLAG,
    description:
      "I went to a German school throughout my childhood until I was 12 years old.",
    alt: "German Image",
  },
];

const Languages = () => {
  return (
    <section id="languages">
      <h5>Linguistic Diversity and Proficiency Showcase</h5>
      <h2>Languages</h2>
      <Swiper
        className="container languages__container"
        pagination={{ clickable: true }}
        slidesPerView={1}
        navigation
        modules={[Pagination, Navigation]}
      >
        {data.map(({ title, subtitle, image, description, alt }, index) => {
          return (
            <SwiperSlide key={index} className="language">
              <div className="language__image">
                <img src={image} alt={alt} />
              </div>
              <h5 className="language__title">{title}</h5>
              <h5 className="language__subtitle">{subtitle}</h5>
              <small className="language__description">{description}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Languages;
