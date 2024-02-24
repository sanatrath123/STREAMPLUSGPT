import React from 'react'

function Bgvideo(key) {

  
  return (
    <div className='mt-1 w-screen h-screen'>
     <iframe className='w-full aspect-video' src="https://www.youtube.com/embed/VNpmdsuo40M?si=jwGIMP3-McnKpePj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     
      {/* make changes in the (key) */}
    </div>
  )
}

export default Bgvideo