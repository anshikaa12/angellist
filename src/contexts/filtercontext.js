import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/filterReducer";

const Filtercontext = createContext();
const useFilter = () => useContext(Filtercontext);
const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    location: "",
    beds: "",
    price: 0,
    type: "",
  });
  return (
    <Filtercontext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </Filtercontext.Provider>
  );
};
export { useFilter, FilterProvider };
