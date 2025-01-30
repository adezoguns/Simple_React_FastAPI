import { createContext, useState } from "react";

export const DataContext = createContext(null); 

export const SharedData = ({children}) => {


    const [getData, setGlobalData] = useState();

  return (
    <DataContext.Provider value={{ getData, setGlobalData}}>
      {children}
    </DataContext.Provider>
  );
};

