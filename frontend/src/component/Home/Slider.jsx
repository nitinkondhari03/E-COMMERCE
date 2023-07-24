import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.css";
import {Box,Text,Image} from "@chakra-ui/react"
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 2 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 300 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Slider = ({sliderImageUrl}) => {
  return (
    <div>
      <Carousel
        responsive={responsive}
        // autoPlay={true}
        swipeable={true}
        draggable={true}
        // showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
        
       
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <Box  className="slider" key={index}>
              <Box h='70%'> <Image h='100%' className="sliderimg" src={imageUrl.url} alt="movie" /></Box>
              <Box h="15%" mt='5px'><Text  className="slidername" fontFamily={'Droid Sans'}  fontWeight={'bold'} textAlign={'center'}>Laptop</Text></Box>
              <Box h="10%"><Text className="sliderprice" fontFamily={'Droid Sans'}  color={'red'} fontWeight={'bold'}  textAlign={'center'}>₹{" "}7384</Text></Box>
             
             
            </Box>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
