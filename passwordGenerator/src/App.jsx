import { useState,useCallback, useEffect, useRef } from 'react'
// import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed,setnumberAllowed]=useState(false)
  const [specialChar,setspecialChar]=useState(false)
  const [password,setpassword]=useState("")


  // useref hook

  const passwordref = useRef(null)


  const copypassword = useCallback(()=>{
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0,101)
  window.navigator.clipboard.writeText(password)
  },[password])


  const passwordGenerator = useCallback(()=> {

    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(specialChar) str+="!@#$%^&*(){}[]-+="

    for(let i=1;i<=length;i++)
    {
      let char = Math.floor(Math.random()*str.length+1)

      pass += str.charAt(char)
    }
    setpassword(pass)
  },[length,numberAllowed,specialChar,setpassword])
    
  useEffect(()=>{
   passwordGenerator()
  },[length,numberAllowed,specialChar,passwordGenerator])

  return (
    <>
     
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-7 py-3 text-orange-400 bg-gray-600">
      <h1 className="text-3xl text-center text-white mb-4">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder='password' readOnly ref={passwordref}/>
          <button className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0" onClick={copypassword}>copy</button>
        </div>

        <div className='flex text-md gap-x-2'>

          <div className='flex items-center gap-x-1'>

            <input type="range" min={8} max={100} value={length} className="cursor-pointer" onChange={(e)=> {setlength(e.target.value)}}/>
            <label htmlFor="length">length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>

            <input type="checkbox" defaultChecked={numberAllowed} id="numerinput" onChange={()=> setnumberAllowed((prev)=> !prev)}/>
            <label htmlFor="Numbers">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>

            <input type="checkbox" defaultChecked={specialChar} id="charinput" onChange={()=> setspecialChar((prev)=> !prev)}/>
            <label htmlFor="Characters">Characters</label>
          </div>


        </div>
      </div>
    </>
  )
  }

export default App
