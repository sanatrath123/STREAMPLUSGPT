import React, { useEffect, useRef, useState } from 'react';
import { ApiOption } from '../Constant';




const useIndivisualtralier = ({ movieId }) => {
    const [movieinfo, setMovieinfo] = useState(null);
    //const prevId = useRef();
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;


    useEffect(()=>{
        Datafetch()
    },[])

    const Datafetch = async () => {
        try {
            const data = await fetch(url, ApiOption);
            const json = await data.json();
            setMovieinfo(json.results);
        } catch (error) {
            console.log('ERROR IN useIndivisualtralier', error);
        }
    };



    return movieinfo;
};

export default useIndivisualtralier;
