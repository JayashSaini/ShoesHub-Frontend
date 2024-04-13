import React from "react";
import { ButtonData } from "../types";

const PrimaryButton: React.FC<ButtonData> = ({ text = "Click", onClick }) => {
  return (
    <div className="button-wrapper">
      <button
        onClick={onClick}
        className=" w-full primary-button-bg rounded-lg sm:p-[9px] p-1 text-center sm:text-sm text-[12px] font-bold text-white button">
        {text}
      </button>
    </div>
  );
};

export default PrimaryButton;