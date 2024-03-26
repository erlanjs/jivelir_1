import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { SlBasket } from "react-icons/sl";
import { useSelector } from "react-redux";

export default function Header() {
  const { basket } = useSelector((s) => s);
  return (
    <header className="fixed w-full py-2 z-10 bg-white ">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img className="w-[130px]" src={logo} alt="" />
          </Link>
          <Link to="/" className="text-[#56768B] font-bold text-xl ">
            Главная
          </Link>
          <a href="/category" className="text-[#56768B] font-bold text-xl ">
            Каталог
          </a>

          <Link to="/certificate" className="text-[#56768B] font-bold text-xl ">
            Сертификат
          </Link>
          <a href="/#contacts" className="text-[#56768B] font-bold text-xl ">
            Контакты
          </a>
          <Link className="relative" to="/basket">
            <SlBasket className="text-[20px]" />
            <span
              style={{
                display: basket.length > 0 ? "" : "none",
              }}
              className="absolute top-[-10px] right-[-10px] text-[14px] bg-[red] text-[#fff] w-[20px] h-[20px] rounded-[50%] flex items-center justify-center border-[2px] border-[#fff]"
            >
              {basket.length}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
