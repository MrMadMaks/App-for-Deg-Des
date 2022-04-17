import React from "react";
import Board from "../../components/Board/Board";
import Header from "../../components/Header/Header";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import { AppRoute } from "../../const";

const Archive = () => {
  return (
    <>
      <Header mode={AppRoute.ARCHIVE} />
      <section className="main__wrapper">
        <Board mode={AppRoute.ARCHIVE} />
      </section>
    </>
  )
}

export default Archive;
