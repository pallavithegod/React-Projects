import { useEffect, useState } from 'react'
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
    <ThemeProvider val={{themeMode, darkTheme, lightTheme}}>
      {/* <h1 className='p-4 bg-blue-800 text-3xl'>Switching Themes</h1> */}
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">

          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
            {/* <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Light Theme</button> */}
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
