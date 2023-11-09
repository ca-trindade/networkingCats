import { createContext, useContext, useState } from "react";

const SelectedProfessionContext = createContext();

export const SelectedProfessionProvider = ({children}) => {
    const [selectedProfession, setSelectedProfession] = useState("");

      return (
          <SelectedProfessionContext.Provider value={{selectedProfession, setSelectedProfession}}>
              {children}
          </SelectedProfessionContext.Provider>
  )
}
export const useSelectedProfession = () => {
  return useContext(SelectedProfessionContext);
};