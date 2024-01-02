import React from "react";
import { mainCarouselData } from "./mainCarouselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router-dom";
const MainCarausel = () => {
  const navigate=useNavigate();
  const items = mainCarouselData.map((item) => (
    <img
      className="cursor-pointer"
      role="presentation"
      src={item.image}
      alt=""
     
    />
  ));
  return (
    <div > 
      <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
    </div>
    
  );
};

export default MainCarausel;
