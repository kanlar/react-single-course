import { useState, useContext } from "react";
import Context from "../context/Context";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function Course() {
  const { data, index, setIndex } = useContext(Context);
  const { title, desc, price } = data[index];

  const checkIndex = (index) => {
    if (index < 0) {
      return data.length - 1;
    }
    return index;
  };
  const chechkNextIndex = (index) => {
    if (index > 4) {
      return 0;
    }
    return index;
  };

  const prevIndex = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const nextIndex = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return chechkNextIndex(newIndex);
    });
  };
  return (
    <>
      <button className="button-left" onClick={prevIndex}>
        <FaArrowCircleLeft />
      </button>
      <div className="box">
        <h3>{title}</h3>
        <span>{price}</span>
        <p>{desc}</p>
      </div>
      <button className="button-right" onClick={nextIndex}>
        <FaArrowCircleRight />
      </button>
    </>
  );
}

export default Course;
