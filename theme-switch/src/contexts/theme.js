import {createContext,useContext} from 'react'


export const themeContext = createContext({
    themeMode:"light",
    darkTheme : ()=>{},
    lightTheme : ()=>{}
});


export const ThemeContextProvider = themeContext.Provider;

export function useThemeContext(){
    return useContext(themeContext)
}