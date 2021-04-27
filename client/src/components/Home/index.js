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
     
      <div className="container-fluid" id="hero"> </div>
        
   
      <div className="float-right"> 
        <a href="/signup"> <Button className="signup"  variant="outline-danger">Sign Up</Button>{' '}</a> 
        <a href="/login"><Button className="login"  variant="outline-danger">Log In</Button>{' '} </a>
      </div>

      
      <img className="home2 mx-auto d-block" src={home2} /> 
      
     
      <h2 className="text-center font-weight-bold" id="quote1"> "Voting is the foundation stone for political action" </h2> 

     
      <h2 className="display-3 text-center font-weight-bold" id="aboutus">About Us</h2>

     
      <img className="about2 mx-auto d-block" id="about2" src={about1} /> 
     
      <Row className="justify-content-md-center"> 
       
        <Col xs sm="12" lg="5" className="pl-4">
          <p className="aboutapp">
          <br/>
              <br/>
             The purpose of our App is to get people in the Georgia Community, a place to gather, organize events and educate with   
             the mission of staying active in the fight of the current law passed by the Georgia Legislative.         
              <br/>
              <br/>
             This unlawful law is aimed to disenfranchise and make it harder for African American and minorities to vote.    
             As a community we must Unify and Unite to this unjust law.   
             <br/>
              <br/>
             We must not turn the blind eye and stay silent and stand on the side lines.   
             We must unite and continue the mission our ancestor started. Lets educate, let's make our voices resound,
             let our liberties and rights stand tall and strong.Let's make them proud and honor them with vindication.   
             <br/>
              <br/>
             As Martin Luther King Jr. Once said "Life's most persistent and urgent question is "What are you doing for others?"
             This selfless approach to this date has created positive inspiring change to all future generations.
             <br/>
              <br/>
             Several movements have sprung due to changing times and circumstances. The Black Lives Matter and the influential Stacy Abrams
             are our present day examples which aims towards the ongoing evolving struggles that minorities face in present times.
             <br/>
              <br/>
              Keep connected get involve.              
          </p>
        </Col>
      </Row>

      <div className="d-flex justify-content-center"> 
        
        <a target="blank" href="https://staceyabrams.com"> <Button className="link2"  variant="outline-danger">Stacy Abrams</Button>{' '}</a>
        <a target="blank" href="https://blacklivesmatter.com"> <Button className="link3"  variant="outline-danger">blacklivesmatter</Button>{' '}</a>
      </div>
     
          <img className="about2 mx-auto d-block" id="about2" src={about2} /> 
          
       
          <p className="display-4 text-center font-weight-bold" id="unitevote" >UnifyingOurVote</p>
       

          <hr/>
              <h3 className="text-center font-weight-bold" id="quote2"> "Injustice anywhere is a threat to justice everywhere" </h3> 
              <h3 className="text-center font-weight-bold" > "Martin Luther King Jr." </h3>
          <hr/>
       
    </Container> 

  
  );
}

export default Home;