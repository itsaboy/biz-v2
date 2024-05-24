import { createContext, useState } from "react";

export const NavContext = createContext();

export function NavContextProvider({ children }) {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <NavContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </NavContext.Provider>
  );
}
