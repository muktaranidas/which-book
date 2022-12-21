import React from "react";
import SpecialBookCard from "./SpecialBookCard";
import book1 from "../../../assets/images/SpecialBook/2.jpg";
import book2 from "../../../assets/images/SpecialBook/4.jpg";
import book3 from "../../../assets/images/SpecialBook/3.jpg";

const SpecialBook = () => {
  const specialBooks = [
    {
      id: "1",
      title: "BUKIHG",
      description: "kkffkfkkf",
      img: book1,
    },
    {
      id: "2",
      title: "BUKIHG",
      description: "loremdkdkdkd",
      img: book2,
    },
    {
      id: "3",
      title: "BUKIHG",
      description: "loremlfkfudjdjdj",
      img: book3,
    },
  ];
  return (
    <div className="grid gap-2 sm:grid-cols-1 lg:grid-cols-3">
      {specialBooks.map((specialBook) => (
        <SpecialBookCard
          key={specialBook.id}
          specialBook={specialBook}
        ></SpecialBookCard>
      ))}
    </div>
  );
};

export default SpecialBook;
