import classNames from "classnames";
import React from "react";

const Heading = ({ text = "", invert = false }) => {
  return (
    <div
      className={classNames(
        "border-[5px] border-primaryDark mx-auto min-w-[18rem] max-w-fit text-center px-6 py-4",
        invert ? "border-white" : "border-primaryDark"
      )}
    >
      <h2
        className={classNames(
          "text-3xl tracking-[10px]  uppercase font-bold",
          invert && "text-white"
        )}
      >
        {text}
      </h2>
    </div>
  );
};

export default Heading;
