import { createContext, useContext } from "react";

export const BackendContext = createContext();

export const BackendProvider = ({children}) => {
    const backendURL = "http://192.168.1.104:3000"

    return(
        <BackendContext.Provider value={backendURL}>
            {children}
        </BackendContext.Provider>
    )
}

export const BackendURL = () => {
    return useContext(BackendContext)
}