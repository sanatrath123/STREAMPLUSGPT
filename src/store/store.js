import { configureStore } from "@reduxjs/toolkit";
import AuthReduser from "./AuthSlice";
import MoviesResuser from './MovieSlice'
import LangReducer from './LangSlice'
import GenresReduser from './GenresSlice'

const Store = configureStore({

reducer:{
    auth: AuthReduser,
   movies: MoviesResuser,
   Lang: LangReducer,
   genres: GenresReduser,
}

})

export default Store