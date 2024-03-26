import React from "react";
import cerificate from "../../assets/certificate.jpeg";

export default function Сertificate() {
  return (
    <div className="container">
      <div className=" pt-[150px] flex flex-col items-center gap-2 py-10 justify-center">
        <h1 className="text-2xl font-bold text-center">Наши награды</h1>
        <p className="text-center w-[400px]">
          Деятельность ювелирного холдинга «Madonna» отмечена престижными
          профессиональными и общественными более 20ти наградами
        </p>
      </div>
      <img className="w-full pt-[50px]" src={cerificate} alt="" />
    </div>
  );
}
