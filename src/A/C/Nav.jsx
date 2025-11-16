import React from 'react'

function Nav() {
  return (
    <div id="nav" className='mt-10 h-[11vh]  border-t-2 border-b-2 border-black flex items-center justify-evenly '>
        <h1 className='font-monument text-4xl'>Jujutsu Kaisen</h1>
        <h1 className='font-monument text-2xl border-r-2 border-black mr-25 pr-4 py-7 text-center'>Characters</h1>
         <h1 className='font-monument text-2xl border-r-2 border-black pr-4 py-7 text-center'>Power</h1>
            <h1 className='font-monument text-2xl text-center'>Manga</h1>
    </div>
  )
}

export default Nav