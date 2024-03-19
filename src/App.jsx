import React, { useEffect, useState } from 'react'
import Testiomonials from './components/Testiomonials'

function App() {
  const [data, setData] = useState({});

  useEffect(()=> {fetch('https://dummyjson.com/users')
  .then((response)=>response.json())
  .then((data)=>setData(data))}
  ,[]);

  return (
    <div className='w-screen h-screen bg-purple-200 text-slate-800 flex flex-col justify-center items-center'>
      <h1 className='text-[3rem] font-bold'>Our Testimonials</h1>
      <div className='w-[15%] h-1 bg-purple-400'></div>
     <Testiomonials users={data.users}/>
    </div>
  )
}

export default App