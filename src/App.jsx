import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {

  const [details,setDetails] = useState(null);

  useEffect(()=>{
    axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc")
    .then((res)=>{
      setDetails(res.data.results[0]);
    })
  },[])

  return (
    <div className= "bg-indigo-200 h-screen flex justify-center items-center">

      <div className='bg-[#171d32] flex flex-wrap text-white font-bold text-2xl p-16 rounded-xl shadow-lg shadow-blue-950/50'>
      
      <div className='col-5 me-4'>
                      <img className='rounded-2xl' src={details.picture.large} alt="pic" />
              </div>
              <div className='col-7 ms-4'>
                  <p className='font-sans mb-2'>Name : {details.name.first}  {details.name.last}</p>
                  <p className='font-sans mb-2'>Gender : {details.gender}</p>
                  <p className='font-sans'>Phone : {details.phone}</p>
              </div>
        
      </div>

    </div>
  )
}

export default App