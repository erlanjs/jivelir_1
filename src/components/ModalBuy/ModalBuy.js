import { Action } from "@remix-run/router";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { actionType } from "../../redux/actionType";

const ModalBuy = () => {
  const { modal } = useSelector((s) => s);
  const dispatch = useDispatch();

  useEffect(() => {
    let box = document.querySelector("#modal");
    console.log(box);
    window.addEventListener("click", (e) => {
      if (e.target === box) {
        dispatch({
          type: actionType.OPEN_CLOSE_MODAL,
          payload: false,
        });
      }
    });
  }, [modal]);

  return (
    <div
      id="modal"
      className="fixed inset-[0] z-20 w-[100%] h-[100vh] backdrop-blur-md bg-[#a09f9f57] flex justify-center items-center"
    >
      <div className="py-[30px] px-[40px] bg-white rounded-[10px] flex flex-col gap-[20px] w-[100%] max-w-[500px] items-center">
        <div className="flex items-center justify-between w-[100%]">
          <h1 className="text-[24px] font-medium">Заказать</h1>
          <button
            onClick={() =>
              dispatch({ type: actionType.OPEN_CLOSE_MODAL, payload: false })
            }
          >
            <IoClose className="text-[24px]" />
          </button>
        </div>
        <input
          className="border-b-[1px] border-[#000] bg-[#f2f2f2] py-[5px] px-[10px] w-[100%] text-[18px] outline-none "
          type="text"
          placeholder="Имя..."
        />
        <input
          className="border-b-[1px] border-[#000] bg-[#f2f2f2] py-[5px] px-[10px] w-[100%] text-[18px] outline-none "
          type="text"
          placeholder="Фамилия..."
        />
        <input
          className="border-b-[1px] border-[#000] bg-[#f2f2f2] py-[5px] px-[10px] w-[100%] text-[18px] outline-none"
          placeholder="Email..."
          type="text"
        />
        <button className="bg-[#257ae8] px-[20%] py-[10px] rounded-[10px] text-[#fff]">
          Отправить
        </button>
      </div>
    </div>
  );
};

export default ModalBuy;
