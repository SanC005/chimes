"use client"
import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()
const ThemeUpdateContext = createContext()
export function useTheme(){
    return useContext(ThemeContext)
}
export function useUpdateTheme(){
    return useContext(ThemeUpdateContext)
}
export default function ThemeContextProvider({children}) {
    const [darkTheme,setDarkTheme] = useState(true)
    function toggleTheme(){
        setDarkTheme((prevdarkTheme) => (!prevdarkTheme))
    }
  return (
    <ThemeContext.Provider value={darkTheme}>
        <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
        </ThemeUpdateContext.Provider>
            
    </ThemeContext.Provider>
  )
}
