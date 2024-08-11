import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, des, icon }) => {
  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-lg border border-[#00415A] transition-transform transform hover:-translate-y-2 hover:shadow-xl group">
      <div className="flex items-center justify-between mb-4">
        <div className="text-4xl text-[#00415A]">
          {icon || <div className="space-y-1 bg-[#00415A] h-1 w-8 rounded"></div>}
        </div>
        <span className="text-[#00415A] group-hover:text-blue-600 transition-colors duration-300">
          <HiArrowRight />
        </span>
      </div>
      <h2 className="text-xl font-semibold text-[#00415A] mb-2">{title}</h2>
      <p className="text-gray-600">{des}</p>
    </div>
  );
};

export default Card;
