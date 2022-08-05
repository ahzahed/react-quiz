import React, { Fragment } from "react";
import CheckBox from "./CheckBox";

const Answers = ({ options = [], handleChange, input }) => {
  return (
    <>
      <div className="answers">
        {options.map((option, index) => (
          <Fragment key={index}>
            {input ? (
              <CheckBox
                className="answer"
                text={option.title}
                value={index}
                checked={option.checked}
                onChange={(e) => handleChange(e, index)}
              />
            ) : (
              <CheckBox
                className={`answer ${
                  option.correct ? "correct" : option.checked ? "wrong" : null
                }`}
                text={option.title}
                defaultChecked={option.checked}
                disabled
              />
            )}
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default Answers;
