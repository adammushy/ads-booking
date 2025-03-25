import { Swiper, SwiperSlide } from "swiper/react";
import type { AdSlot } from "@/types";
import AdSlotItem from "../../add-item";

let slidesPerView = 1.3;
let centeredSlides = true;
let spaceBetween = 30;
if (typeof window !== "undefined") { // Replace process.browser with typeof window check for Next.js
  if (window.innerWidth > 768) {
    slidesPerView = 3;
    spaceBetween = 35;
    centeredSlides = false;
  }
  if (window.innerWidth > 1024) {
    slidesPerView = 4;
    spaceBetween = 65;
    centeredSlides = false;
  }
}

type AdSlotsCarouselType = {
  adSlots: AdSlot[];
};

const AdSlotsCarousel: React.FC<AdSlotsCarouselType> = ({ adSlots }) => {
  if (!adSlots || adSlots.length === 0) return <div>No ad slots available</div>;

  return (
    <div className="products-carousel">
      <Swiper
        spaceBetween={spaceBetween}
        loop
        centeredSlides={centeredSlides}
        watchOverflow
        slidesPerView={slidesPerView}
        className="swiper-wrapper"
      >
        {adSlots.map((item) => (
          <SwiperSlide key={item.id}>
            <AdSlotItem
              id={item.id}
              category={item.category}
              unit={item.unit}
              contentType={item.contentType}
              rate={item.rate}
              currency={item.currency}
              platform={item.platform}
              images={item.images}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdSlotsCarousel;