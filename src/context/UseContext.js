import { createContext,useContext } from "react";


export const themeContext =createContext({
      
    thememode:"light",
    setdarktheme:()=>{},
    setwhitetheme:()=>{}
}
)

export const ThemeContextProvider=themeContext.Provider

export default function usetheme(){
  return useContext(themeContext)
} 
