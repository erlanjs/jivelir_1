import React from "react";
import { useDispatch } from "react-redux";
import { actionType } from "../../redux/actionType";

const TotalCard = ({ basket }) => {
  const dispatch = useDispatch();

  let total = basket
    .map((el) => el.price * el.count)
    .reduce((acc, el) => acc + el);

  let sale = Math.ceil((total / 100) * 10);

  let salePrice = Math.ceil(total - sale);

  let totalCount = basket.map((el) => el.count).reduce((acc, el) => acc + el);

  return (
    <div className="fixed border shadow w-[370px] h-[420px] px-[15px] py-[10px] bg-[white] ">
      <h1 className="flex justify-between text-[30px] font-bold">
        <span>К оплате</span>
        {salePrice}c
      </h1>
      <p className="flex justify-between items-center mt-[20px] text-[18px]">
        Сумма за {totalCount} товара
        <span className="flex-auto mx-[4px] h-[1rem] border-b-[1px] border-dashed border-[gray] "></span>
        <span>{total}c</span>
      </p>
      <p className="flex justify-between items-center mt-[20px] text-[18px]">
        Скидка
        <span className="flex-auto mx-[4px] h-[1rem] border-b-[1px] border-dashed border-[gray] "></span>
        <span>-{sale}c</span>
      </p>
      <p className="flex justify-between items-center mt-[15px] text-[18px] pb-[20px]">
        Начислим скидку
        <span className="flex-auto mx-[4px] h-[1rem] border-b-[1px] border-dashed border-[gray] "></span>
        <span>-10%</span>
      </p>
      <hr />
      <p className="text-[18px] font-medium mt-[15px]">
        Промокод:{" "}
        <span className="text-[#257ae8] border-b-[1px] border-dashed border-[#257ae8] cursor-pointer">
          Выбрать
        </span>
      </p>
      <p className="text-[18px] font-medium mt-[20px] mb-[20px]">
        Доставка:{" "}
        <span className="text-[#257ae8] border-b-[1px] border-dashed border-[#257ae8] cursor-pointer">
          Выбрать
        </span>
      </p>
      <hr />
      <button
        onClick={() =>
          dispatch({ type: actionType.OPEN_CLOSE_MODAL, payload: true })
        }
        className="bg-[#257ae8] w-[100%] h-[50px] text-[#fff] rounded-[10px] mt-[25px]"
      >
        Оформить заказ
      </button>
    </div>
  );
};

export default TotalCard;
