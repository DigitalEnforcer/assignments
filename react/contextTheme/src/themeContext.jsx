import React from "react";

const ThemeContext = React.createContext()

function ThemeContextProvider(props){
    const [mode, setMode] = React.useState("dark")
    const toggleTheme = () => {
        setMode(prevMode => prevMode === "dark" ? "light" : "dark")
  }

  return (
    <ThemeContext.Provider value={{
        mode,
        toggleTheme
    }}>
        <div className={`${mode}-mode`}>
            {props.children}
        </div>
    </ThemeContext.Provider>
  )
}

export {ThemeContext, ThemeContextProvider}