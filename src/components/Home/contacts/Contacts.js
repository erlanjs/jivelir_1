import React from "react";

export default function Contacts() {
  return (
    <div className="container" id="contacts">
      <h1 className="text-center font-bold text-2xl  py-[50px]">Контакты</h1>
      <div className="flex justify-between items-center pb-[100px]">
        <div className="flex flex-col justify-center gap-4">
          <a href="tel:+996778966436" className="text-xl font-medium">
            Тел: +996 312 966 436
          </a>
          <a href="" className="text-xl font-medium">
            email: madonn@shop.com
          </a>
          <a href="" className="text-xl font-medium">
            WhatsApp: +996 778 966 436
          </a>
          <a href="" className="text-xl font-medium">
            Instagram: @Maddona_Bish
          </a>
          <a href="" className="text-xl font-medium">
            Telegram: @Maddona_Bish_bot
          </a>
          <a href="" className="text-xl font-medium">
            Адрес: Шопокова, 121/1
          </a>
        </div>
        <iframe
          title="1"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.784005429862!2d74.61311097665025!3d42.87740290225994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7c096320bc9%3A0xa93703c5fe88d895!2zYmVhdXR5IHNob3dyb29tLCDRg9C7LiDQqNC-0L_QvtC60L7QstCwLCAxMjEvMSwg0YDQtdC0INGB0LXQvdGC0LXRgCwgLTEg0Y3RgtCw0LY!5e0!3m2!1sru!2skg!4v1711431614823!5m2!1sru!2skg"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
