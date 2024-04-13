import React from 'react'; // Make sure to import React if you're using JSX
import { OpenAI } from 'openai'; // Import OpenAI from the correct path

// Import other necessary dependencies
import lang from '../hooks/lang';
import { useSelector } from 'react-redux';
import conf from '../conf/conf';

const GptSearch = () => {
  const StoreLang = useSelector((state) => state.Lang.lang);

  const Submit = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    const value = event.target.elements.inputValue.value;

    // Create an instance of OpenAI with your API key
    const openai = new OpenAI({ apiKey: "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" });

    try {
      const completion = await openai.chat.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo",
      });

      console.log(completion.data[0].text);
    } catch (error) {
      console.log("ERROR IN OPENAI FETCH", error);
    }
  }

  return (
    <div className='w-full h-screen bg-gray-300 flex flex-col items-center'>
      <h1 className='mt-7 p-4 text-3xl bg-blue-400 rounded-xl'>
        {lang[StoreLang].gptHeader}
      </h1>
      <div className='mt-8 p-4 w-6/12 h-96 bg-gray-200 overflow-y-scroll'></div>

      <form className='w-8/12 h-auto flex justify-center' onSubmit={Submit}>
        <input
          type="text"
          name="inputValue"
          placeholder={lang[StoreLang].gptSearchbar}
          className='w-8/12 h-12 mt-8 p-4 rounded-2xl'
        />

        <button className='w-1/12 h-12 bg-blue-500 mt-8 ml-2 rounded-2xl text-xl text-center' type='submit'>
          {lang[StoreLang].gptSearch}
        </button>
      </form>
    </div>
  );
}

export default GptSearch;
