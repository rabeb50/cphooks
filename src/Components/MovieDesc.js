import React,{useState,useEffect} from 'react'

import {Card,Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import StarRatingComponent from 'react-star-rating-component';
const MovieDesc = ({ match, Movies }) => {
  
    const [film, setFilm] = useState({});
    useEffect(
      () => {setFilm(Movies.find(el=>(el.title===match.params.title)) );
},[film, match.params.title]);
        
    return (
     
        <Card bg='dark' text='white'style={{ margin: '5rem',width: '70rem',padding:'1rem' }}>
        <Card.Img className='card-img'variant="top" height="5px" width ="2px" src={film.posterURL} />
        <Card.Title style={{fontFamily:"Times New Roman, Times, serif",marginLeft:'2rem',fontSize:'3rem'}}>{film.title}</Card.Title>
        <Card.Text style={{paddingLeft:'2rem'}}><iframe width="800" height="450" src={film.trailer} title="YouTube video player" />
        </Card.Text>
        <Card.Body>
          
          <Card.Text>
          {film.description}
          </Card.Text>
          <Link to ="/">
          <Button variant="outline-warning">Go Back</Button></Link>
        </Card.Body>
        <Card.Footer style={{fontSize:"25px"}}>
           <StarRatingComponent value={film.rating} starCount={5}  name=''/>
                </Card.Footer>
      </Card>
    )
}

export default MovieDesc
