import React from "react";

const Heading = ({ text = "" }) => {
  return (
    <div className="border-[5px] border-primaryDark mx-auto min-w-[18rem] max-w-fit text-center px-6 py-4">
      <h2 className="text-3xl tracking-[10px] uppercase font-bold">{text}</h2>
    </div>
  );
};

export default Heading;
