import React from 'react'
import MovieCard from './MovieCard'
import {Col,Row,ListGroup} from 'react-bootstrap';
import Add from './Add'

function MovieList({MovieData, textFilter, ratingFilter,SetMovieData}) {
   
    return (
        <ListGroup.Item  >
 
     
            <Row xs={1} md={3}  style={{padding:"3rem"}} className="g-5">
        {MovieData.filter((Movie)=>Movie.title.toLowerCase().includes(textFilter.toLowerCase().trim())
        && Movie.rating>=ratingFilter).map((Movie)=>(
            <Col key={Movie.id}>
         <MovieCard Movie={Movie}  />
         </Col>
        ))}
        <Add  SetMovieData={SetMovieData} MovieData={MovieData}/>
        
        </Row>
        </ListGroup.Item>
    )
}

export default MovieList
