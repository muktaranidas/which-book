import React from "react";
import ContactUs from "../../ContactUs/ContactUs";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import SpecialBook from "../SpecialBook/SpecialBook";
import UpdateNewBook from "../UpdateNewBook/UpdateNewBook";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <SpecialBook></SpecialBook> */}
      <Categories></Categories>
      <UpdateNewBook></UpdateNewBook>
    </div>
  );
};

export default Home;
