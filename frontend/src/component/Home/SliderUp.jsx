import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.css";
import {Box,Text,Image} from "@chakra-ui/react"
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 300 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
  //First image url
  {
    url:
      "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a29b782e2df5170a.jpg?q=20"
  },
  {
    url:
      "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/28cd75263d68e2f6.jpg?q=20"
  },
  {
    url:
      "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/f731eda4b2e22a55.png?q=20"
  },
  {
    url:
      "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/09a2543cc172d8e4.jpg?q=20"
  },
  {
    url:
      "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/28cd75263d68e2f6.jpg?q=20"
  },


  {
    url:"https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a610a7c382319ea4.png?q=20"
  }
];
const SliderUp= () => {
  return (
    <div >
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        // showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
        
       
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <Box  key={index}>
              <Box > <Image style={{height:'100%',width:"100%"}}src={imageUrl.url} alt="movie" /></Box>
              
            </Box>
          );
        })}
      </Carousel>
    </div>
  );
};
export default SliderUp;
