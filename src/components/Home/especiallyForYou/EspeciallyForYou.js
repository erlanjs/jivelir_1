import React from "react";
import Card from "../card/Card";
import { back } from "./../../../faceback";

export default function EspeciallyForYou({ title, description }) {
  return (
    <div className="container">
      <div className="flex flex-col items-center">
        <h2 className="py-3 text-2xl font-medium mt-10">{title}</h2>
        <p className="text-center max-w-[600px]">{description}</p>
        <div className="flex min-w-[1200px] pl-[350px] w-full mt-10  justify-center gap-3 overflow-x-scroll ">
          {back.map((card) => (
            <Card card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
