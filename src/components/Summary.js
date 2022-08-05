import React from "react";
import image from "../assets/images/success.png";
const Summary = ({ score, noq }) => {
  return (
    <div className="summary">
      <div className="point">
        {/* progress bar will be placed here  */}
        <p className="score">
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      <div className="badge">
        <img src={image} alt="Success" />
      </div>
    </div>
  );
};

export default Summary;
