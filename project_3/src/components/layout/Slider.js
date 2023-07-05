import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper";
import picture1 from "../../images/slider-picture-1.jpg";
import picture2 from "../../images/slider-picture-2.jpg";
import picture3 from "../../images/slider-picture-3.jpg";
import picture4 from "../../images/slider-picture-4.jpg";
import picture5 from "../../images/slider-picture-5.jpg";
import picture6 from "../../images/slider-picture-6.jpg";

function Slider() {
  const IMAGES = [picture1, picture2, picture3, picture4, picture5, picture6];
  const SLIDES = IMAGES.map((image, index) => (
    <SwiperSlide key={index} className="slider-item">
      <img className="slider-image" src={image} alt="marvel" />
    </SwiperSlide>
  ));
  return (
    <Swiper
      className="slider"
      modules={[Pagination, EffectFade, Autoplay]}
      effect="fade"
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true }}
    >
      {SLIDES}
    </Swiper>
  );
}

export default Slider;
