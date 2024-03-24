import React from "react";
import { useDispatch } from "react-redux";
import { actionType } from "../../../redux/actionType";
import { addToCart } from "./../../../redux/Reducer/ActionCreater";

export default function Card({ card }) {
  const dispatch = useDispatch();
  function addBasket() {
    dispatch(addToCart(card));
  }
  function open() {
    dispatch({ type: actionType.OPEN_CLOSE_MODAL, payload: true });
  }

  return (
    <div className="min-w-[300px] flex flex-col p-3 border-2 border-red gap-2 ">
      <img src={card.image} alt="product image" />
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
        onClick={open}
        id="clickMenu"
        className="clickModal bg-white py-3 text-[#56768B] rounded-md"
      >
        Купить в один клик
      </button>
    </div>
  );
}
