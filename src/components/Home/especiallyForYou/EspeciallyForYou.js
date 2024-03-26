import React from "react";
import Card from "../card/Card";

export default function EspeciallyForYou({ title, description, data }) {
  return (
    <div className="container">
      <div className="flex flex-col items-center">
        <h2 className="py-3 text-2xl font-medium mt-10">{title}</h2>
        <p className="text-center max-w-[600px]">{description}</p>
        <div className="flex   w-full mt-10   gap-3 overflow-x-scroll ">
          {data.map((el) => (
            <Card
              card={{
                id: el.id,
                image: el?.images?.[0].image,
                artikul: el.code,
                name: el.name,
                price: el.price,
                availability: "В наличии",
                data: el,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
