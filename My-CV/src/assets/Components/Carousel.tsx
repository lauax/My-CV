import { Flex } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


interface Projects {
	title: string;
	description: string;
	link: string;
	image: string;
  }
  

interface CarouselProps {
    Portfolio: Projects[]; 
  }
  

function Carousel({ Portfolio }: CarouselProps) {
	return (
		<Flex
			w="100%"
			justifyContent="center"
			alignItems="center"
			data-testid="carousel-container"
		>
			<Swiper
				modules={[Navigation]}
				spaceBetween={20}
				slidesPerView={1}
				navigation
				breakpoints={{
					480: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
					1280: {
						slidesPerView: 5,
						spaceBetween: 40,
					},
					1536: {
						slidesPerView: 6,
						spaceBetween: 50,
					},
				}}
			>
				{Portfolio.map((Portfolio: Projects, index: number) => (
					<SwiperSlide key={index}>
                        <img src={Portfolio.image} alt={Portfolio.title} />
                        <h3>{Portfolio.title}</h3>
					</SwiperSlide>
				))}
			</Swiper>
		</Flex>
	);
}

export default Carousel;
