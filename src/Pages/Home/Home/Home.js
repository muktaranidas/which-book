import React from "react";
import ContactUs from "../../ContactUs/ContactUs";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import SpecialBook from "../SpecialBook/SpecialBook";
import UpdateNewBook from "../UpdateNewBook/UpdateNewBook";
import Writter from "../Writter/Writter";
import BestBook from "./BestBook/BestBook";
import Review from "./Review/Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <SpecialBook></SpecialBook> */}
      <Writter></Writter>
      <Categories></Categories>
      {/* <BestBook></BestBook> */}
      <Review></Review>
      {/* <UpdateNewBook></UpdateNewBook> */}
    </div>
  );
};

export default Home;
