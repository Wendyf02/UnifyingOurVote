import React, { useEffect } from "react";
import "./style.css";
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel'

function NewsJumbo() {
  useEffect(() => {
    axios.get(
      "https://bing-news-search1.p.rapidapi.com/news/trendingtopics?textFormat=Raw&safeSearch=Off",
      {
        headers: {
          "x-search-location": "Georgia",
          "x-bingapis-sdk": "true",
          // Change API for new apiKey after this works for testing.
          "x-rapidapi-key": "45ddc71006msh100d431d8ce72d4p13d9f4jsn32ec95c8283c",
          "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
          "useQueryString": true
        },
      }
    ).then((response)=>{
console.log(response)
//put params in here or within url so that it just appends articles OR videos to page and then link it to the return stuff located below

const searchForm = document.querySelector('.search')
    })

  }, []);

  return (
    // <form className="search" actions="">
    //   <label for="">News</label>
    //   <input className="input"></input>

    // </form>
    <section className="newsInclusive">
      <div className="container newsContainer">
        <h3>News</h3>
        <hr></hr>
        <div className="row videoRows">
         
        </div>
      </div>
    </section>

//     <Carousel fade>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=First slide&bg=373940"
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=Second slide&bg=282c34"
//       alt="Second slide"
//     />

//     <Carousel.Caption>
//       <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=Third slide&bg=20232a"
//       alt="Third slide"
//     />

//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
  );
}
export default NewsJumbo;
