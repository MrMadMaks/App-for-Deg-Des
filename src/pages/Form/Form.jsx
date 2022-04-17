import React from "react";
import AddEvent from "../../components/AddEvent/AddEvent";
import Filter from "../../components/Filter/Filter";
import Header from "../../components/Header/Header";
import { AppRoute } from "../../const";

const Form = () => {
  return (
    <>
      <Header mode={AppRoute.MAIN} />
      <section class="main__wrapper">
        <Filter mode={AppRoute.EVENT} />
        <AddEvent />
      </section>
    </>
  )
}

export default Form;
