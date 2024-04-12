import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./cardminial";
import kikota from "../../assets/testimonies/kikota.jpg";
import simon from "../../assets/testimonies/simon acc.jpg";
import steve from "../../assets/testimonies/steve aii.jpg";
import grace from "../../assets/testimonies/grace must.jpg";
import said from "../../assets/testimonies/said must.jpg";
import mdem from "../../assets/testimonies/mdem.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "../../assets/img/screen 3.png";

import "./styles.css";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="container" >
      <h1 id="roboto" className="headh margint">WHAT COMMUNITY SAYS:</h1>

      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <TestimonialCard
            name="elisa kikota"
            text="Telecom Student"
            image={kikota}
            talk="Netnexa made customer connections effortless. It simplified contact management, aiding easy customer reach."
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            name="simon"
            text="Accountant & IT Student"
            image={simon}
            talk="In Dubu's tools revolutionized marketing strategies.
             Its precision targeting boosted successful campaigns"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            name="steve"
            text="Accaountant Student"
            image={steve}
            talk="Effortless client connections with Dubu's user-friendly interface.
             Simplified workflow for gig economy professionals"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            name="Grace"
            text="IT student"
            image={grace}
            talk="Help me to reach out my customers and easy connected to
                      them"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            name="Said"
            text="Must IT Student"
            image={said}
            talk="Networking's strength elevated by NetNexa. Simplified connectivity for success"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            name="Willium Mdem"
            text="Computer Eng.Student"
            image={mdem}
            talk="NetNexa: Enhancing Student Connections, Enriching Experiences"
          />
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
