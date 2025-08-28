import { createContext, useContext } from "react";

export const BackendContext = createContext();

export const BackendProvider = ({ children }) => {
  // PC ka IP yahan dalna hai (same WiFi pe hona chahiye)
  const backendURL = "http://192.168.1.107:3000"
    // import.meta.env.MODE === "development"
    //   ? "http://192.168.1.110:3000" // apna LAN IP yahan replace karo
    //   : "https://your-production-domain.com"; // jab host karoge

  return (
    <BackendContext.Provider value={backendURL}>
      {children}
    </BackendContext.Provider>
  );
};

export const BackendURL = () => {
  return useContext(BackendContext);
};
