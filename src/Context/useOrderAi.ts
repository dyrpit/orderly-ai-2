import { useContext, useState } from "react";
import { OrderAiContext } from "./ContextProvider";

export const useOrderAi = () => {
  const [value, setValue] = useState(99);
  const handleValueChange = () => {
    setValue((value) => value * 2);
  };

  return {
    value,
    handleValueChange,
  };
};

export const useOrderAiContext = () => {
  return useContext(OrderAiContext);
};
