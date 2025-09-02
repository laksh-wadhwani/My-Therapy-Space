import { createContext, useContext } from "react";

export const BackendContext = createContext();

export const BackendProvider = ({children}) => {
    const backendURL = "https://my-therapy-space-backend.vercel.app"

    return(
        <BackendContext.Provider value={backendURL}>
            {children}
        </BackendContext.Provider>
    )
}

export const BackendURL = () => {
    return useContext(BackendContext)
}