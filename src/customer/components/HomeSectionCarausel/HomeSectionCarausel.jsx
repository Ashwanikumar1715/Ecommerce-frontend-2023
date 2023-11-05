import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";


const HomeSectionCarausel = ({data, sectionName}) => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

const slidePrev=()=>setActiveIndex(activeIndex-1);
const slideNext=()=>setActiveIndex(activeIndex+1);
const syncActiveIndex=({item})=> setActiveIndex(item);


const [activeIndex, setActiveIndex]= useState(0);

  const items = data.slice(0,10).map((item) => <HomeSectionCard product={item} />);
  return (
    <div className=" border ">
        <h2 className="tex-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />
      { activeIndex!==items.length-5 && <Button
          variant="contained"
          className="z-50"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
          onClick={slideNext}
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>}
       {activeIndex!==0&& <Button
          variant="contained"
          className="z-50"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
          onClick={slidePrev}
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>}
      </div>
    </div>
  );
};

export default HomeSectionCarausel;
