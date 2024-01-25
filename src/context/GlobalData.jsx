import { createContext, useState } from "react";

export const GlobalDataApi = createContext('');

const GlobalProvider = ({ children })=> {

    let[inputVal , setInputVal] = useState('');

    return(
        <GlobalDataApi.Provider value={{ inputVal , setInputVal }}>
            {children}
        </GlobalDataApi.Provider>
    )
}

export default GlobalProvider;

