import React,{useState} from 'react'
import {Button,Modal,InputGroup,FormControl} from 'react-bootstrap'
import { TiPlusOutline} from "react-icons/ti";
import { v4 as uuidv4 } from 'uuid';
function Add({SetMovieData ,MovieData}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[title,SetTitle]=useState('')
    const[description,SetDescription]=useState('')
    const[posterURL,SetPosterURL]=useState('')
    const[rating,SetRating]=useState('')
    const x={backgroundColor:"black",color:'#fff',height:"39px"};
    const y={backgroundColor:"black",color:'lightgray'};
const AddMovie=(e)=>{
  e.preventDefault();
    let newMovie={
      id: uuidv4(),
        title:title,
        description:description,
        rating:rating,
        posterURL:posterURL,
    };
    SetMovieData([...MovieData,newMovie])
    handleClose();

}
  return (
    <div >
      <Button variant="outline-dark" style={{ marginTop:"1rem",width: '25rem',height:"40rem",fontFamily:""}} onClick={handleShow} className="AddButton">
      <TiPlusOutline style={{height:"120px",width:"120px"}}/>
      </Button>

      <Modal  show={show} onHide={handleClose} className="Modal">
      <Modal.Header style={{backgroundColor:"black",opacity:"0.85",color:"orange"}} >
          <Modal.Title>Add a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:"black",opacity:"0.85"}}>
            
            <InputGroup style={{marginTop:'1rem'}} size="lg">
            <InputGroup.Prepend style={y}>
          <InputGroup.Text style={y} id="inputGroup-sizing-lg">Title</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl style={x} aria-label="Large" aria-describedby="inputGroup-sizing-lg"  onChange={e=>SetTitle(e.target.value)}/>
           
                </InputGroup>           
            
           
            <InputGroup style={{marginTop:'1rem'}} size="lg">
            <InputGroup.Prepend style={y}>
            <InputGroup.Text style={y} id="inputGroup-sizing-lg">PosterURL</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl style={x} aria-label="Large" aria-describedby="inputGroup-sizing-lg"  onChange={e=>SetPosterURL(e.target.value)} />
            </InputGroup>
            <InputGroup style={{marginTop:'1rem'}} size="lg">
            <InputGroup.Prepend style={y}>
            <InputGroup.Text style={y} id="inputGroup-sizing-lg">Description</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl style={x} aria-label="Large" aria-describedby="inputGroup-sizing-lg"  onChange={e=>SetDescription(e.target.value)}/>
               </InputGroup>
          
               <InputGroup style={{marginTop:'1rem'}} size="lg">
            <InputGroup.Prepend style={y}>
            <InputGroup.Text style={y} id="inputGroup-sizing-lg">Rating</InputGroup.Text>
            </InputGroup.Prepend>
                
            <FormControl style={x} aria-label="Large" aria-describedby="inputGroup-sizing-lg"  onChange={e=>SetRating(e.target.value)} />
                </InputGroup>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:"black",opacity:"0.85"}}>
          <Button variant="outline-warning" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-warning" onClick={AddMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Add