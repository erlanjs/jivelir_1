import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delInBasket, minusCartCount } from "../../redux/Reducer/ActionCreater";
import { addToCart } from "./../../redux/Reducer/ActionCreater";
import { MdDeleteOutline } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import TotalCard from "./TotalCard";
import ModalBuy from "../ModalBuy/ModalBuy";

const Basket = () => {
  const { basket, modal } = useSelector((s) => s);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  return (
    <div className="absolute flex flex-col justify-center z-10 bg-white w-[100%] py-[50px] ">
      <h1
        style={{
          display: basket.length >= 1 ? "" : "none",
        }}
        className="ml-[30px] pb-[15px] text-[28px] font-medium border-b text-center"
      >
        Корзина
      </h1>
      {basket.length > 0 ? (
        <div className="flex justify-center pr-[300px] gap-[90px]">
          <div className="basket  flex flex-col items-start">
            {basket.map((el, idx) => (
              <div
                className="flex py-[20px] ml-[30px] border-b min-w-[700px]"
                key={idx}
              >
                <img
                  className="h-[150px] w-[150px] object-cover"
                  src={el.image}
                  alt="product image"
                />
                <div className="py-[30px] px-[20px]">
                  <div className="flex justify-between min-w-[500px]">
                    <h1 className="max-w-90 text-[18px]">{el.name}</h1>
                    <div className="flex flex-col items-end">
                      <h3 className=" min-w-[110px] flex justify-end text-[20px] font-medium">
                        {el.count * el.price}c
                      </h3>
                      <h4 className="text-[gray]">{el.price}c / ш.</h4>
                    </div>
                  </div>
                  <div className="flex justify-between mt-[20px]">
                    <div className="flex items-center gap-[10px]">
                      <button
                        className="border-[1.5px] w-[40px] h-[30px] flex items-center justify-center rounded-[10px]"
                        onClick={() => dispatch(minusCartCount(el))}
                      >
                        <FaMinus className="text-[14px]" />
                      </button>
                      <h2 className="mx-[10px] text-[20px] font-medium">
                        {el.count}
                      </h2>
                      <button
                        className="border-[1.5px] w-[40px] h-[30px] flex items-center justify-center rounded-[10px]"
                        onClick={() => dispatch(addToCart(el))}
                      >
                        <FaPlus className="text-[14px]" />
                      </button>
                    </div>
                    <button
                      onClick={() => dispatch(delInBasket(el.id))}
                      className="bg-[#f2f2f2] py-[5px] px-[10px] flex items-center gap-[5px] rounded-[10px] text-[#257ae8]"
                    >
                      <MdDeleteOutline className="text-[20px]" />
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <TotalCard basket={basket} />
          </div>
          {modal ? <ModalBuy /> : null}
        </div>
      ) : (
        <div className="flex flex-col gap-[15px] h-[80vh] items-center justify-center">
          <h1 className="text-[32px] font-semibold">Ваша корзина пуста</h1>
          <h5 className="max-w-[500px] text-center">
            Скорее в каталог, там много потрясающих украшений, которые вам
            обязательно понравятся!
          </h5>
          <button
            onClick={() => navigate("/")}
            className="bg-[#257ae8] w-[260px] h-[40px] text-[#fff] rounded-[10px] mt-[10px]"
          >
            Перейти в каталог
          </button>
        </div>
      )}
    </div>
  );
};

export default Basket;
