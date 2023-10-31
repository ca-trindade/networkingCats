import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { saveData } from "../../store/breeds/reducer";

export const useToggle = () => {
  const [toggleValue, setToggleValue] = useState();
  const dispatch = useDispatch();

  const toggler = () => {
    setToggleValue(!toggleValue);
  };

  useEffect(() => {
    if (toggleValue) {
      dispatch(saveData());
    }
  }, [toggleValue]);

  return [toggleValue, toggler];
};
