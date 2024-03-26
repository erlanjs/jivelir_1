import React from "react";
import { useDispatch } from "react-redux";
import { actionType } from "../../../redux/actionType";
import { addToCart } from "./../../../redux/Reducer/ActionCreater";
import { Link, useNavigate } from "react-router-dom";

export default function Card({ card }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function addBasket() {
    dispatch(addToCart(card));
  }

  function navigateToDetailPage() {
    localStorage.setItem("product", JSON.stringify(card.data));

    navigate(`/product/${card.id}`);
  }

  return (
    <div className=" min-w-[300px] max-w-[320px] flex flex-col justify-between p-3 border-2 gap-2 border-red  ">
      <img
        src={card.image}
        className="cursor-pointer"
        onClick={navigateToDetailPage}
        alt="product image"
      />
      <p className="text-[18px] text-gray-600 font-semibold">{card.name}</p>
      <span className="text-gray-500">
        Артикул: <span className="text-black font-bold">{card.artikul}</span>
      </span>
      <span className="text-[#56768B] font-semibold">{card.availability}</span>
      <p className="font-bold text-[23px]">{card.price}c</p>
      <button
        onClick={() => addBasket()}
        className="bg-[#56768B] py-3 text-white rounded-md"
      >
        В корзину
      </button>

      <button
        id="clickMenu"
        onClick={navigateToDetailPage}
        className="clickModal bg-white py-1 text-[#56768B] rounded-md"
      >
        Подробное
      </button>
    </div>
  );
}
