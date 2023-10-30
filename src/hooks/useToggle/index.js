import { fetchDataBreeds } from "../../api/axios";
import { useState, useEffect } from "react";

export const useToggle = () => {
  const [toggleValue, setToggleValue] = useState();

  const toggler = () => {
    setToggleValue(!toggleValue);
  };
  useEffect(() => {
    if (toggleValue) {
      fetchDataBreeds();
    }
  }, [toggleValue]);
  return [toggleValue, toggler];
};
