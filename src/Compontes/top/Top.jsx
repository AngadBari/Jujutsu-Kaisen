import React from 'react'
import jujutsuVideo from "../../assets/Video/JujutsuKaisen.mp4";

function top() {
  return (
    <div id="Center" className=' h-165 w-full  p-5'>
        
            <video src={jujutsuVideo}  autoPlay loop muted className="object-cover border-none h-152 w-full bg-pink-200  overflow-hidden " />
        
    </div>
  )
}

export default top