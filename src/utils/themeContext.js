"use client"
import React, { useState } from 'react'

export const ThemeContext = React.createContext()
export const ThemeUpdateContext = React.createContext()
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
