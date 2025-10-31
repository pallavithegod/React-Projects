import React,{ useEffect, useState } from 'react'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';


function App() {

  const [themeMode, setThemeMode] = useState("light");

  //these fxns also defined inside context/theme.js file as well
  const darkTheme = () => {
    setThemeMode("dark");
  }

  const lightTheme = () => {
    setThemeMode("light");
  }
  
  // actual change in theme - not related to context
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);



  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
     
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">

          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>
          
          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>

      </div>
    </ThemeProvider>
  )
}

export default App
