import { Action } from "@remix-run/router";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { actionType } from "../../redux/actionType";
import axios from "axios";
import Loading from "../../assets/Loading";

const ModalBuy = () => {
  const { basket, modal } = useSelector((s) => s);
  const [newData, setNewDate] = useState({ name: "", phone: "", email: "" });
  const [isLoading, setLoading] = useState(false);
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

  console.log("basket", basket);

  async function buyProduct(e) {
    e.preventDefault();
    setLoading(true);

    const token = "6463582102:AAGHpKaZw0W5Zulkb2l0K5jFfvS0muaixlY";
    const chatID = "-4158375996";
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=`;

    try {
      if (basket.length > 1) {
        const orderResponse = await axios(url + "Новый заказ");
        console.log(orderResponse.data);

        await Promise.all(
          basket.map(async (product) => {
            const photoResponse = await axios.post(
              "https://api.telegram.org/bot" + token + "/sendPhoto",
              {
                chat_id: chatID,
                photo: product?.image,
                caption: `Название продукта: ${product?.name} \n Цена: ${product?.price} \n  количество: ${product.count}`,
              }
            );
            console.log(photoResponse);
          })
        );

        await new Promise((resolve) => setTimeout(resolve, 2000));

        const finalResponse = await axios(
          url +
            `-ИМЯ: ${newData.name} \n -НОМЕР ТЕЛЕФОНА: ${newData.phone} \n -EMAIL: ${newData.email}`
        );
        console.log(finalResponse.data);
        basket.forEach((el) => {
          dispatch({ type: actionType.DEL_IN_BASKET, payload: el.id });
        });
        alert("Ваш заказ успешно отправлено");
        setLoading(false);

        dispatch({ type: actionType.OPEN_CLOSE_MODAL, payload: false });
      } else {
        const response = await axios.post(
          "https://api.telegram.org/bot" + token + "/sendPhoto",
          {
            chat_id: chatID,
            photo: basket?.[0]?.image,
            caption: `Новый заказ \n-Название продукта: ${basket?.[0]?.name} \n-Цена: ${basket?.[0]?.price}cом \n-ИМЯ: ${newData.name} \n -НОМЕР ТЕЛЕФОНА: ${newData.phone} \n -EMAIL: ${newData.email}`,
          }
        );
        console.log(response);
        basket.forEach((el) => {
          dispatch({ type: actionType.DEL_IN_BASKET, payload: el.id });
        });

        alert("Ваш заказ успешно отправлено");
        setLoading(false);

        dispatch({ type: actionType.OPEN_CLOSE_MODAL, payload: false });
      }
    } catch (error) {
      console.log(error);
    }
  }

  function onChange(e) {
    const { name, value } = e.target;

    setNewDate({ ...newData, [name]: value });
  }

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

        {isLoading ? (
          <Loading />
        ) : (
          <form onSubmit={buyProduct}>
            <input
              className="border-b-[1px] border-[#000] bg-[#f2f2f2] py-[5px]  px-[10px] w-[100%] text-[18px] outline-none "
              type="text"
              placeholder="Имя..."
              required
              name="name"
              value={newData.name}
              onChange={onChange}
            />
            <input
              className="border-b-[1px] border-[#000] bg-[#f2f2f2] py-[5px] my-2 px-[10px] w-[100%] text-[18px] outline-none "
              type="text"
              placeholder="Номер телефона..."
              name="phone"
              required
              value={newData.phone}
              onChange={onChange}
            />
            <input
              className="border-b-[1px] border-[#000] bg-[#f2f2f2] py-[5px] px-[10px] w-[100%] text-[18px] outline-none"
              placeholder="Email..."
              type="text"
              name="email"
              required
              value={newData.email}
              onChange={onChange}
            />
            <button className="bg-[#257ae8] px-[20%] py-[10px] my-2 rounded-[10px] text-[#fff]">
              Отправить
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ModalBuy;
