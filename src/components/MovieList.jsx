import React from 'react';
import Moviecard from './Moviecard';
import { useSelector } from 'react-redux';
import useTopratedmovie from '../hooks/useTopratedmovie'


const MovieList = () => {
  const Nowplaying = useSelector((state) => state.movies.Nowplayingmovies);
 const TopratedList = useSelector((state)=>state.movies.Toprated)


useTopratedmovie()

//   return (
//     <div className='w-full bg-red-400 mt-4 relative overflow-x-auto'>
//       <h1 className='bg-black text-3xl text-white flex justify-center pb-4'>
//         NOWPLAYING MOVIES
//       </h1>
//       {Nowplaying ? (
//         <div className='w-[100%] flex justify-center space-x-4 mt-4 flex-wrap'>
//           {Nowplaying.map((movies) => (
//             <Moviecard
//               key={movies.id}
//               {...{
//                 poster_path: movies.poster_path,
//                 rating: movies.vote_average,
//               }}
//             />
//           ))}
//         </div>
//       )
//       : null}

// <h1 className='bg-black text-3xl text-white flex justify-center pb-4'>
//     TOP RATED MOVIES
//   </h1>
//   {TopratedList ? (
//     <div className='w-[100%] flex justify-center space-x-4 mt-4 flex-wrap overflow-x-scroll'>
//       {TopratedList.map((movies) => (
//         <Moviecard
//           key={movies.id}
//           {...{
//             poster_path: movies.poster_path,
//             rating: movies.vote_average,
//           }}
//         />
//       ))}
//     </div>
//   ) : null}
//     </div>
//   );
// };

// export default MovieList;



return(
<div className='w-full bg-red-400 mt-4 relative overflow-x-auto'>
  <h1 className='bg-black text-3xl text-white flex justify-center pb-4'>
    NOW PLAYING MOVIES
  </h1>
  {Nowplaying ? (
    <div className='w-[100%] flex justify-center space-x-4 mt-4 flex-wrap'>
      {Nowplaying.map((movies) => (
        <Moviecard
          key={movies.id}
          {...{
            id: movies.id,
            poster_path: movies.poster_path,
            rating: movies.vote_average,
            title: movies.title
          }}
        />
      ))}
    </div>
  ) : null}

  <h1 className='bg-black text-3xl text-white flex justify-center pb-4'>
    TOP RATED MOVIES
  </h1>
  {TopratedList ? (
    <div className='w-[100%] flex justify-center space-x-4 mt-4 flex-wrap overflow-x-scroll'>
      {TopratedList.map((movies) => (
        <Moviecard
          key={movies.id}
          {...{
            id: movies.id,
            poster_path: movies.poster_path,
            rating: movies.vote_average,
          }}
        />
      ))}
    </div>
  ) : null}
</div>
)
}


export default MovieList;
