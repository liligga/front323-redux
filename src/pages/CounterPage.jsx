import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";

import { incrementCounter, decrementCounter } from "../store/counterReducer";

const CounterPage = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const theme = "white";
  const themeWhite = theme == "white" 

  const increment = () => {
    dispatch(incrementCounter());
  };

  const decrement = () => {
    dispatch(decrementCounter());
  };

  return (
    <div className="w-full flex flex-col justify-center gap-3">
      <span className="text-2xl col-span-full">Счетчик</span>
      <div className="w-full flex justify-center items-center gap-4">
        <button
          className="w-8 bg-slate-300 px-2 py-1 rounded-md"
          onClick={decrement}
        >
          -
        </button>
        <span>{counter}</span>
        <button
          onClick={increment}
          className="w-8 bg-slate-300 px-2 py-1 rounded-md"
        >
          +
        </button>
        <div
          className={clsx({
            "bg-slate-300 px-2 py-1 rounded-md text-black": theme === "white",
            "bg-slate-800 px-2 py-1 rounded-md text-white": theme === "black",
          })}
        >
          Hello
        </div>
      </div>
    </div>
  );
};

export default CounterPage;
