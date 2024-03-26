import React, { useEffect, useState } from "react";
import Banner from "./banner/Banner";
import Hero from "./hero/Hero";
import EspeciallyForYou from "./especiallyForYou/EspeciallyForYou";
import Fashion from "./fashion/Fashion";
import ModalBuy from "./../ModalBuy/ModalBuy";
import { useSelector } from "react-redux";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import axios from "axios";

const Home = () => {
  const { modal } = useSelector((s) => s);
  const [cards, setCards] = useState({
    new: [],
    forYou: [],
  });

  useEffect(() => {
    axios("https://jewelry.pythonanywhere.com/product/product/").then(
      ({ data }) => {
        console.log(data);
        const dataForYou = data.filter(
          (el) => el.type?.[0]?.name === "Специально для вас"
        );

        const dataNew = data.filter((el) => el.type?.[0]?.name === "Новинки");

        setCards({ new: dataNew, forYou: dataForYou });
      }
    );
  }, []);

  return (
    <div>
      <Hero />
      {modal ? <ModalBuy /> : null}
      <EspeciallyForYou
        title={"Специально для вас"}
        description={`Эти украшения идеально подходят для особых случаев, таких как свадьбы,
        вечеринки или другие торжественные мероприятия, где вы хотите
        выглядеть великолепно и привлекательно. "Золотые бужутерии" станут
        неотъемлемым элементом вашего гардероба, добавляя блеск и шик к вашему
        образу.`}
        data={cards.forYou}
      />
      <Fashion />
      <EspeciallyForYou
        title={"Новинки"}
        description={`Эти украшения идеально подходят для особых случаев, таких как свадьбы,
          вечеринки или другие торжественные мероприятия, где вы хотите
          выглядеть великолепно и привлекательно. "Золотые бужутерии" станут
          неотъемлемым элементом вашего гардероба, добавляя блеск и шик к вашему
          образу.`}
        data={cards.new}
      />

      <Banner />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Home;
