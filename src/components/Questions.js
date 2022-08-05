import React from "react";
import Answers from "./Answers";

const Questions = ({ answers = [] }) => {
  return answers.map((item, index) => (
    <div className="question" key={index}>
      <div className="qtitle">
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answers input={false} options={item.options} />
    </div>
  ));
};

export default Questions;
