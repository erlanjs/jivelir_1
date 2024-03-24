import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/hero-bg-1.jpeg";
import img2 from "../../../assets/hero-bg-2.jpeg";
import banner1 from "../../../assets/banner1.png";
import banner2 from "../../../assets/banner2.png";
import banner3 from "../../../assets/banner3.png";

export default function Hero() {
  const [isActive, setActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setActive(!isActive);
    }, 4000);
  }, [isActive]);

  return (
    <div className="pt-[100px]">
      {isActive ? (
        <img className="hero-img1" src={img1} alt="" />
      ) : (
        <img className="hero-img2" src={img2} alt="" />
      )}

      <div className="container">
        <h2 className="text-center text-2xl font-medium py-8 pt-[70px]">
          Коллекции украшений:
        </h2>
        <img className="w-full" src={banner1} alt="" />
        <div className="flex mt-5 gap-5">
          <img className="w-full" src={banner3} alt="" />
          <img className="w-full" src={banner2} alt="" />
        </div>
      </div>
    </div>
  );
}
