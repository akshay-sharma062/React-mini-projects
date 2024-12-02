import { useState } from 'react'
import Btn from './components/Btn'

function App() {
  const [Color, setColor] = useState("olive")

  return (
    <>
    <div style={{background:Color}} className='w-screen h-screen'>
      <div className='p-6 w-11/12 2 mx-auto bg-black bg-opacity-10  rounded-xl shadow-lg flex items-center gap-x-4 hover:bg-white transition duration-1000 cursor-pointer '>
        <div className='bg-red-600 p-4 h-11 w-80 rounded-xl shadow-lg flex items-center gap-x-4 border-2 border-transparent hover:translate-y-0.5 hover:translate-x-1  hover:border-lime-400 transition duration-1000 ' onClick={()=>setColor("red")} >red</div>
        <div className='bg-blue-600 rounded-xl p-4 h-11 w-80  shadow-lg flex items-center gap-x-4  border-2 border-transparent hover:translate-y-0.5 hover:translate-x-1  hover:border-lime-400 transition duration-1000' onClick={()=>setColor("blue")}>blue</div>
        <div className='bg-black rounded-xl p-4 h-11 w-80  shadow-lg flex items-center gap-x-4  border-2 border-transparent hover:translate-y-0.5 hover:translate-x-1  hover:border-lime-400 transition duration-1000' onClick={()=>setColor("black")}>black</div>
        <div className='bg-white   rounded-xl p-4 h-11 w-80  shadow-lg flex items-center gap-x-4  border-2 border-transparent hover:translate-y-0.5 hover:translate-x-1  hover:border-lime-400 transition duration-1000' onClick={()=>setColor("white")}>white</div>
        <div className='bg-yellow-400 rounded-xl p-4 h-11 w-80  shadow-lg flex items-center gap-x-4  border-2 border-transparent hover:translate-y-0.5 hover:translate-x-1  hover:border-lime-400 transition duration-1000' onClick={()=>setColor("olive")}>olive</div>
        
      </div>
      <btn/>


    </div>
     
    </>
  )
}

export default App


