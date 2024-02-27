import { Input } from 'postcss'
import React from 'react'
import lang from '../hooks/lang'
import { useSelector } from 'react-redux'


const GptSearch = () => {

const StoreLang = useSelector((state)=>state.Lang.lang)

const Submit = (event)=>{
  event.preventDefault(); // Prevents the default form submission behavior
  const value = event.target.elements.inputValue.value;
  
}


  return (
    <div className='w-full h-screen bg-gray-300 flex flex-col items-center'>
 <h1 className='mt-7 p-4 text-3xl bg-blue-400 rounded-xl'>

{lang[StoreLang].gptHeader}
 </h1>
 <div className='mt-8 p-4 w-6/12 h-80 bg-gray-200 overflow-y-scroll'>

</div>

<form className='w-8/12 h-auto flex justify-center' onSubmit={Submit}>
<input
          type="text"
          name="inputValue"
          placeholder={lang[StoreLang].gptSearchbar}
          className='w-8/12 h-12 mt-8 p-4 rounded-2xl'
        />

<button  className='w-1/12 h-12 bg-blue-500 mt-8 ml-2 rounded-2xl text-xl text-center' type='submit'>
{lang[StoreLang].gptSearch}
</button>
</form>


    </div>
  )
}

export default GptSearch