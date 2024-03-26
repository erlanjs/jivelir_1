import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Home/card/Card";
import Loading from "../../assets/Loading";

export default function Category() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  let url_string = window.location.href;
  let url = new URL(url_string);
  let collection = url.searchParams.get("collection");

  useEffect(() => {
    setLoading(true);
    axios("https://jewelry.pythonanywhere.com/product/product/").then(
      ({ data }) => {
        console.log(data);

        if (collection) {
          const newData = data.filter(
            (el) => el?.collection?.name === collection
          );

          if (newData.length) {
            setData(newData);
          } else {
            setData([]);
          }
        } else {
          setData(data);
        }

        setLoading(false);
      }
    );
  }, []);

  const card = {
    id: 1,
    image:
      "https://m.artauro.ru/cdn/mobile/item/slider/2f0647ef-9237-4859-a87d-0a8034f57382.png",
    name: "Серьги пусеты из белого золота с бриллиантами",
    artikul: "YZ1324",
    availability: "В наличии",
    price: 68438,
  };

  return (
    <div className=" pt-[150px]">
      <div className="max-w-[1400px] w-full my-0 mx-auto">
        {isLoading ? (
          <div className=" min-h-[60vh] w-full flex items-center">
            <Loading />
          </div>
        ) : (
          <>
            <h1 className="text-center font-bold text-3xl">
              {collection || "Каталог"}{" "}
            </h1>
            <div className="flex gap-3 flex-wrap justify-center mt-10 pb-[120px]">
              {data?.map((el, index) => (
                <Card
                  key={index}
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
          </>
        )}
      </div>
    </div>
  );
}
