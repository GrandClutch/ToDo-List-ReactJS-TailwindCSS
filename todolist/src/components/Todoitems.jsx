import React from "react";
import Tick from "../assets/tick.png";
import NotTick from "../assets/not_tick.png";
import Delete from "../assets/delete.png";

const Todoitems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => toggle(id)}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img src={isComplete ? Tick : NotTick} alt="Tick" className="w-7" />
        <p
          className={`text-slate-700 ml-4 text-[17px] ${
            isComplete ? "line-through" : ""
          } `}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => deleteTodo(id)}
        src={Delete}
        alt="Delete"
        className="w-4 cursor-pointer"
      />
    </div>
  );
};

export default Todoitems;
