import React,{useState} from 'react'
import MovieList from './MovieList';
import Filter from './Filter';
const Home = ({Movies}) => {
    const[MovieData,SetMovieData]=useState(Movies)
    const[textFilter,SetTextFilter]=useState('')
    const[ratingFilter,SetRatingFilter]=useState(0)
    return (
        <div>
            <Filter SetTextFilter={SetTextFilter} SetRatingFilter={SetRatingFilter}/>
            <MovieList SetMovieData={SetMovieData} MovieData={MovieData} textFilter={textFilter} ratingFilter={ratingFilter}/>
        </div>
    )
}

export default Home
