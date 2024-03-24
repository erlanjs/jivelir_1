import React from "react";
import img1 from "../../../assets/fashion1.png";
import img2 from "../../../assets/fashion2.png";
import img3 from "../../../assets/fashion3.png";
import img4 from "../../../assets/fashion4.png";

const fashions = [
  {
    title: "На деловую встречу",
    img: img1,
  },
  {
    title: "Детский",
    img: img2,
  },
  {
    title: "Вечерний образ",
    img: img3,
  },
  {
    title: "На каждый день",
    img: img4,
  },
];

export default function Fashion() {
  return (
    <div className="py-[150px]">
      <div className="container">
        <h1 className="text-2xl font-medium text-center">Образы:</h1>
        <div className="flex justify-between gap-4 pt-10">
          {fashions.map((el) => (
            <div className="image">
              <img src={el.img} alt="" />
              <h3 className="font-semibold text-[18px] py-2">{el.title}</h3>
              <p className="text-[#808080]">Подобрано в нашем магазине</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
