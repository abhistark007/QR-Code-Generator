
import { useState } from 'react';
import './App.css'
import QRCode from "react-qr-code";

function App() {

  const [input,setInput]=useState("Heyy");

  return (
   <div className='flex flex-col min-h-screen w-full gap-10'>
    <input type="text" placeholder='Enter Text' className='bg-gray-400 w-[400px] mx-auto mt-7 p-3' value={input} onChange={(e)=>setInput(e.target.value)}/>
    <QRCode
    className='mx-auto'
    size={256}
    style={{ height: "auto", maxWidth: "400px", width: "400px" }}
    value={input}
    viewBox={`0 0 256 256`}
    />
   </div>
  )
}

export default App
