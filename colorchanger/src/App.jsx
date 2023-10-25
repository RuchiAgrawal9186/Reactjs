import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [Color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:Color}}></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-lg bg-white px-3 py-2 rounded-2xl gap-3">
          <button className="outline-none px-4 py-2 rounded-xl text-white shadow-lg" style={{backgroundColor:"red"}} onClick={()=> setColor("red")}>Red</button>
          <button className="outline-none px-4 py-2 rounded-xl text-white shadow-lg" style={{backgroundColor:"green"}} onClick={()=> setColor("green")}>Green</button>
          <button className="outline-none px-4 py-2 rounded-xl text-white shadow-lg" style={{backgroundColor:"orange"}} onClick={()=> setColor("orange")}>Orange</button>
          <button className="outline-none px-4 py-2 rounded-xl text-white shadow-lg" style={{backgroundColor:"blue"}} onClick={()=> setColor("blue")}>blue</button>
          <button className="outline-none px-4 py-2 rounded-xl text-white shadow-lg" style={{backgroundColor:"cyan"}} onClick={()=> setColor("cyan")}>Cyan</button>
          <button className="outline-none px-4 py-2 rounded-xl text-white shadow-lg" style={{backgroundColor:"pink"}} onClick={()=> setColor("pink")}>pink</button>
        </div>
      </div>
    </>
  )
}

export default App
