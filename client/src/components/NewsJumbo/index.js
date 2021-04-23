import React, { useEffect, useState } from "react";
import "./style.css";
// import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

// Create event route 
function NewsJumbo() {
  const [search, setSearch] = useState ("")
  // useEffect(() => {
  //   // console.log(process.env.REACT_APP_News_Key)
  //   fetch(
  //     "https://api.bing.microsoft.com/v7.0/news/search?q=Georgia+Vote&count=4",
  //     {
  //       method: "GET",
  //       headers: {
  //         "Ocp-Apim-Subscription-Key": ""
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       // setSearch(response.value)
  //       console.log(response.value[0])
  //       //name of news article, description, image and url link to article.
  //     });
  // }, []);

  return (
    // <div></div>
    // <div>
    // {search.map((news)=>{
    //   console.log(news)
    // })}
    // </div>
    <section className="newsInclusive">
      <div className="container newsContainer container-fluid">
        <h3>News</h3>
        <hr></hr>
        <div className="height">


          <Carousel fade>
            {/* Map through from api on latest 3ish stories?? */}
            <Carousel.Item>
              {/* Attach url in href from api 1 and responsive carousel*/}
              {/* {response.value[0].url} */}
              <a href="https://google.com" target="blank">
                <img
                  className="d-block w-100"
                  // response.value[0].image.thumbnail.contentUrl
                  // {response.value[0].image.thumbnail}
                  src="https://via.placeholder.com/50x12"
                  alt="First slide"
                />
              </a>
              <Carousel.Caption>
                {/* Latest news  */}
                <h3>
                {/* {response.value[0].name} */}
                  Headline 1</h3>
                <p className="fontColor">
                  Description of event 1
                  {/* {response.value[0].description} */}
                </p>
              </Carousel.Caption>
            </Carousel.Item>



            <Carousel.Item>
              {/* Attach url in href from api 2 */}
              <a href="https://google.com" target="blank">
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/50x12"
                  alt="Second slide"
                />
              </a>
              <Carousel.Caption>
                <h3>Headline 2</h3>
                <p className="fontColor">
                  Why local Election officials Take Many issues with the new
                  laws in place
                </p>
              </Carousel.Caption>
            </Carousel.Item>



            <Carousel.Item>
              {/* Attach url in href from api 3 */}
              <a href="https://google.com" target="blank">
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/50x12"
                  alt="Third slide"
                />
              </a>
              <Carousel.Caption>
                <h3>Headline 3</h3>
                <p className="fontColor">
                  New Voting laws across the nation sparks cooperate backlash
                </p>
              </Carousel.Caption>
            </Carousel.Item>



            <Carousel.Item>
              {/* Attach url in href from api 4 and responsive carousel*/}
              <a href="https://google.com" target="blank">
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/50x12"
                  alt="First slide"
                />
              </a>
              <Carousel.Caption>
                {/* Latest news  */}
                <h3>Headline 4</h3>
                <p className="fontColor">
                  Fourth api description
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
export default NewsJumbo;
