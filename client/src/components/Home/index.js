import React from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import "./style.css"
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
import Button from "react-bootstrap/Button"
import home2 from "../../assets/images/home2.png"
import about1 from "../../assets/images/about1.png"
import about2  from "../../assets/images/about2.png"
import { Col, Row } from "react-bootstrap";


function Home() {

  return ( 

  <Container fluid> 
      <Row> 
        <Col> 
         <div className="container-fluid" id="hero"> </div>
        </Col>
      </Row>  
   

    <Button className="float-right login"  variant="outline-danger">Log In</Button>{' '}
    <Button className="float-right signup"  variant="outline-danger">Sign Up</Button>{' '}


    
      <Row className="justify-content-md-center"> 
        <Col xs lg="2">
           <img className="home2" src={home2} /> 
        </Col>
      </Row>
  
   
     
      <Row className="justify-content-md-center" id="quote1"> 
      {/* <Col xs lg="2">    */}
           <h3> "Voting is the foundation stone for political action" </h3> 
        {/* </Col> */}
      </Row>


     
    
      <div className="row justify-content-md-center" id="aboutus" > 
      <h2 className="display-4 font-weight-bold">About Us</h2>
        </div>
  

    
        <div className="col align-self-start"> 
      <img className="about1" src={about1} /> 
        </div>


      <Row className="justify-content-md-center"> 
        <Col xs lg="2">
           <img className="home2" src={about2} /> 
        </Col>
      </Row>
  
      {/* <Row className="justify-content-center"> 
        <Col>     
           <h1> UnifyingOurVote</h1> 
        </Col>
      </Row> */}

        <div className="row justify-content-md-center" id="unitevote" > 
          <p className="display-4 font-weight-bold">UnifyingOurVote</p>
        </div>

        <Row className="justify-content-center" id="quote2"> 
        <Col>     
           <h3> "Injustice anywhere is a threat to justice everywhere" </h3> 
           <h5> "Martin Luther King" </h5>
        </Col>
      </Row>




    {/* <Col sm={2} className="m-auto">
        <img
           className="d-block mx-auto img-fluid w-50"
             src={mysvg}
             alt="mysvg"
         ></img>
    </Col> */}
    
  </Container> 

  
  );
}

export default Home;