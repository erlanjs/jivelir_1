import React from "react";
import Banner from "./banner/Banner";
import Hero from "./hero/Hero";
import EspeciallyForYou from "./especiallyForYou/EspeciallyForYou";
import Fashion from "./fashion/Fashion";
import ModalBuy from "./../ModalBuy/ModalBuy";
import { useSelector } from "react-redux";

const Home = () => {
  const { modal } = useSelector((s) => s);

  console.log(modal);

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
      />
      <Fashion />
      <EspeciallyForYou
        title={"Новинки"}
        description={`Эти украшения идеально подходят для особых случаев, таких как свадьбы,
          вечеринки или другие торжественные мероприятия, где вы хотите
          выглядеть великолепно и привлекательно. "Золотые бужутерии" станут
          неотъемлемым элементом вашего гардероба, добавляя блеск и шик к вашему
          образу.`}
      />

      <Banner />
    </div>
  );
};

export default Home;
