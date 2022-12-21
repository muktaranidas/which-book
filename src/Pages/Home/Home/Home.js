import React from "react";
import ContactUs from "../../ContactUs/ContactUs";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import SpecialBook from "../SpecialBook/SpecialBook";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <SpecialBook></SpecialBook> */}
      <Categories></Categories>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
