import React from 'react'
import sukuna from './Sukuna.jpg';
import Gojo from './GojoA.jpg'
import {MoveUpRight} from 'lucide-react'


function Power() {
  return (
    <>
    <div id="power" className='mt-10 mb-10 h-[11vh] border-t-2 border-b-2 border-black flex items-center justify-center  flex-wrap gap-4 sm:gap-10'>
      <h1 className='  text-2xl sm:text-4xl underline font-light ml-20'>Power </h1>
      <h1 className='text-lg sm:text-2xl font-monument hover:border-2 border-black rounded-full px-4 py-2'>Cleave </h1>
      <h1 className='text-lg sm:text-2xl font-monument hover:border-2 border-black rounded-full px-4 py-2'>Dismantle </h1>
      <h1 className='text-lg sm:text-2xl font-monument hover:border-2 border-black rounded-full px-4 py-2'>Fire Arrow </h1>
    </div>

 
 
   <div className="w-full flex flex-col lg:flex-row items-center gap-10">
       <div className="flex flex-col items-center">
          <img className="p-4 object-cover w-60 h-60 sm:w-300 sm:h-165" src={sukuna} alt="Sukuna"/>
           <h3 className="font-monument text-2xl sm:text-3xl font-bold text-center">
             The King of Curses
          </h3>
    </div>

 
  <div className="flex flex-col items-center">
    <img className="p-4 object-cover w-56 h-56 sm:w-72 sm:h-72" src={Gojo} alt="Gojo"/>
       <p className="px-4 sm:px-10 text-sm sm:text-base font-mono text-center">
        <b>"Gojo Satoru"</b> is the strongest sorcerer in
       <b> Jujutsu Kaisen</b>, known for his unmatched power and calm
        confidence. With the Limitless and <b>Six Eyes</b>, he dominates
       every battle with ease.
    </p>
  </div>
</div>


     
       <div id="scrollContainer" className="mt-17 mb-10 h-11 flex overflow-hidden">
           <div id="scroll" className="flex items-center gap-15 p-2 min-w-full anime border-t-2 border-b-2 border-black font-karnivor text-4xl">
            <h3>Jujutsu Kaisen</h3>
             <h3>Jujutsu Kaisen</h3>
              <h3>Jujutsu Kaisen</h3>
               <h3>Jujutsu Kaisen</h3>
            </div>

            <div id="scroll" aria-hidden="true" className="flex items-center gap-15 p-2 min-w-full anime border-t-2 border-b-2 border-black font-karnivor text-4xl">
            <h3>Jujutsu Kaisen</h3>
             <h3>Jujutsu Kaisen</h3>
              <h3>Jujutsu Kaisen</h3>
               <h3>Jujutsu Kaisen</h3>
            </div>

    </div>

     <div className=' flex items-center justify-center mb-10 '>
             <h3 className=' font-karnivor  text-xl'>Made with ❤️ Angad </h3>
              <a href="https://github.com/AngadBari"><MoveUpRight /></a> 
        </div>             
   

     

    </>
  )
}

export default Power