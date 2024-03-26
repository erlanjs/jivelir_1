import React from "react";
import logo from "../../../assets/logo.png";

export default function Footer() {
  return (
    <div
      style={{ borderTop: "2px solid gray" }}
      className="flex justify-center items-center py-2"
    >
      <img className="w-[150px]" src={logo} alt="" />
    </div>
  );
}
