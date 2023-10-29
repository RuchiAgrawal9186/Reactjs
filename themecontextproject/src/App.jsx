import { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/theme'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  const [themeMode,setThemeMode] = useState("light")

  const lighttheme = () =>{
    setThemeMode("light")
  }

  const darktheme = ()=>{
    setThemeMode("dark")
  }
useEffect(()=>{
  document.querySelector("html").classList.remove("light","dark")
  document.querySelector("html").classList.add(themeMode)
},[themeMode])

  return (
    <ThemeProvider value={{themeMode,lighttheme,darktheme}}>
      
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeButton></ThemeButton>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card></Card>
                    </div>
                </div>
            </div>

    </ThemeProvider>
  )
}

export default App
