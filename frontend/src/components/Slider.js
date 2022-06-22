import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";

const Slider = () => {
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#ffc107",
                    "--swiper-pagination-color": "#ffc107",
                }}
                cssMode={true}
                navigation={true}
                pagination={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                }}
                modules={[Navigation, Pagination, Autoplay]}
            >
                <SwiperSlide className="slide__1"></SwiperSlide>
                <SwiperSlide className="slide__2"></SwiperSlide>
                <SwiperSlide className="slide__3"></SwiperSlide>
                <SwiperSlide className="slide__4"></SwiperSlide>
            </Swiper>
        </>
    );
};
export default Slider;
