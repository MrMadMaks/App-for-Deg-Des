import React from "react";
import Header from "../../components/Header/Header";
import { AppRoute } from "../../const";
import Filter from "../../components/Filter/Filter";
import Board from "../../components/Board/Board";

const Main = () => {
  return (
    <>
      <Header mode={AppRoute.MAIN} />
      <section className="main__wrapper">
        <Filter mode={AppRoute.MAIN} />
        <Board mode={AppRoute.MAIN} />
      </section>
    </>
  )
}

export default Main;
