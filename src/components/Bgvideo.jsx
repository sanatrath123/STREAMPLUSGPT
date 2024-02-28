import React from 'react'

function Bgvideo(id) {

  //i got id obj so for value i create id.id , fix this
  return (
    <div className='mt-1 w-screen h-screen'>
     <iframe className='w-full aspect-video' src={`https://www.youtube.com/embed/${id?.id}?si=jwGIMP3-McnKpePj`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     
      
    </div>
  )
}

export default Bgvideo