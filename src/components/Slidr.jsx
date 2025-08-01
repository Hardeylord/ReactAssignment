import { h1 } from "framer-motion/client";
import { Plus } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const Slidr = () => {
  const boxArray = Array(6).fill(0);
  const onMobile=useMediaQuery({maxWidth:767})
  const arrayImage = [
    {
      image: "/slider/pic1.jpg",
      h1: "Traveller mindset",
    },
    {
      image: "/slider/pic2.jpg",
      h1: "Explore the woods",
    },
    {
      image: "/slider/pic3.jpg",
      h1: "Journey beyond your cabin",
    },
    {
      image: "/slider/pic4.jpg",
      h1: "Join the Neighbourhood",
    },
    {
      image: "/slider/pic5.jpg",
      h1: "A journey to put a smile on your face",
    },
    {
      image: "/annie-spratt-hCb3lIB8L8E-unsplash.jpg",
      h1: "Get started now",
    },
  ];

  
  const [eImage, seteImage] = useState(null);
  return (
    <>
      <div className="bg-[#454545] w-full h-[100vh] flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/3"></div>
        <div className="flex flex-row md:w-2/3 h-[80%] gap-2 justify-center items-center">
          {arrayImage.map((box, index) => (
            <div
              onClick={() => seteImage(index)}
              key={index}
              style={{
                background: `url(${box.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                transition: "all 0.3s ease",
                width: eImage === index ? "40%" : "50px",
              }}
              className="h-full flex items-end cursor-pointer p-4 relative justify-center rounded-[42px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/40 z-0" />
              <div style={{
                width: eImage == index ? "100%" : "fit-content",
              }} className="bg-white/30  flex justify-between items-center p-2 rounded-[26px] backdrop-blur-sm">
                <h1
                  style={{
                    display: eImage == index ? "block" : "none",
                  }}
                  className="text-white z-10 text-xs"
                >
                  {box.h1}
                </h1>
                <div className="bg-white/30 rounded-[18px]">
                  <Plus color="#f6f6f6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
