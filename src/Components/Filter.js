import React from 'react'
import {Form,FormControl,Navbar,InputGroup} from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';
import { AiOutlineSearch } from "react-icons/ai";
function Filter({SetTextFilter, SetRatingFilter}) {
   
                

    return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/movielogo.png"
            width="200"
            height="100"
            className="d-inline-block align-top"
          /> </Navbar.Brand>
            <Form inline style={{marginLeft:"20%"}}>
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1"> <AiOutlineSearch style={{height:"25px",width:"23px"}}/></InputGroup.Text>
      </InputGroup.Prepend>
                <FormControl type="text" placeholder="Search " className="mr-sm-2" onChange={(e)=>(SetTextFilter(e.target.value))}/>
                </InputGroup>
  </Form>
  <Form inline style={{marginLeft:"2%"}}>
  <InputGroup >
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1"style={{marginTop:"7px"}}>Rating</InputGroup.Text>
      </InputGroup.Prepend>
      <div style={{fontSize:"30px",marginButtom:"5px"}}>
                <StarRatingComponent name="" isHalf="true" starCount={5} onStarClick={(x)=>SetRatingFilter(x)}/>  
                </div>
                </InputGroup>
  </Form>
           
  </Navbar>
    )
}

export default Filter
