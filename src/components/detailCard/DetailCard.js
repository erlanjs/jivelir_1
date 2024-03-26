import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Reducer/ActionCreater";
import Contacts from "../Home/contacts/Contacts";
import Footer from "../Home/footer/Footer";

export default function DetailCard() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [selectImage, setSelectImage] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("product"));

    window.scrollTo(0, 0);
    setProduct(data);
  }, [id]);

  console.log(product);

  function addToBasket() {
    const card = {
      id: product.id,
      image: product.images[0].image,
      name: product.name,
      artikul: product.code,
      availability: "В наличии",
      price: product.price,
    };

    dispatch(addToCart(card));
    navigate("/basket");
  }

  return (
    <>
      <div className="container">
        <div className="flex gap-5 pt-[150px]">
          <div className="">
            <img
              className="border border-solid rounded-lg w-full"
              src={product.images?.[selectImage].image}
              alt=""
            />
            <div className="mt-2 flex items-center gap-2">
              {product?.images?.map((img, index) => (
                <img
                  className="w-[70px] h-[70px] object-cover border border-solid rounded-lg"
                  style={{
                    opacity: index === selectImage ? "1" : "0.5",
                    cursor: index === selectImage ? "auto" : "pointer",
                  }}
                  onClick={() => setSelectImage(index)}
                  src={img?.image}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className="w-[50%] flex flex-col gap-3">
            <h1 className=" text-2xl font-bold">{product?.name}</h1>
            <p>Актикул: {product?.code}</p>
            <p>{product.description}</p>
            <h4 className="text-xl font-bold">Характеристики:</h4>
            <div className="">
              <div className="flex gap-5 items-center ">
                <h5 className="text-lg font-medium">Категория:</h5>
                <p>{product.category?.[0]?.name}</p>
              </div>
              <div className="flex gap-5 items-center ">
                <h5 className="text-lg font-medium">Металл:</h5>
                <p>{product.metal?.[0]?.name}</p>
              </div>
              <div className="flex gap-5 items-center ">
                <h5 className="text-lg font-medium">Камень:</h5>
                <p>{product.gemstone?.[0]?.name}</p>
              </div>
              <div className="flex gap-5 items-center ">
                <h5 className="text-lg font-medium">Страна:</h5>
                <p>{product.country?.name}</p>
              </div>
              <div className="flex gap-5 items-center ">
                <h5 className="text-lg font-medium">Коллекция:</h5>
                <p>{product.collection?.name}</p>
              </div>
              <div className="flex gap-5 items-center ">
                <h5 className="text-lg font-medium">Тип:</h5>
                <p>{product.type?.[0]?.name}</p>
              </div>
            </div>
            <button
              className="py-4 px-5 bg-[#56768B] text-white font-medium rounded-xl"
              onClick={addToBasket}
            >
              Заказать сейчас
            </button>
          </div>
        </div>
      </div>
      <Contacts />
      <Footer />
    </>
  );
}
