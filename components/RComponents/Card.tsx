import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-gray-100 shadow-md bg-white p-3">{children}</div>
  );
};

export default Card;
