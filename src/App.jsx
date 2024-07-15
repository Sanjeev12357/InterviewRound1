import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import sukkonimg from "./assets/images/Screenshot 2024-07-15 082301.png"
import cross from "./assets/images/Screenshot 2024-07-15 082706.png"
import MyHookForm from './forms/MyHookForm'

function App() {
  

  return (
    <div className='bg-black w-[100%] h-[100vh] md:h-[100%] flex items-center justify-center '>
        <div className='md:w-[340px] w-full h-full lg:h-[100vh]  my-4  relative rounded-md items-center px-6 py-6  bg-[#FEFFFE]  lg:w-[450px]'>

          <div className='cross'>
          <div className='right-4 md:right-2 absolute'>
          <img
          src={cross}
          />
        </div>
          </div>
           
            <div className=' '>
              <img
              src={sukkonimg}
              />
             
              
              
      
            <div>
              
            </div>
          </div>

          <div>
            <h1 className="font-bold uppercase mt-6 text-3xl md:text-2xl">We would love </h1>
            <h1 className='font-normal uppercase text-3xl md:text-2xl '>To know about you!</h1>
          </div>

          <MyHookForm/>
        </div>
    </div>
  )
}

export default App
