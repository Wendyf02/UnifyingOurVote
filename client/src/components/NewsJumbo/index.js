import React, { useEffect } from "react";
import "./style.css";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

function NewsJumbo() {
  useEffect(() => {
    axios
      .get(
        "https://bing-news-search1.p.rapidapi.com/news/trendingtopics?textFormat=Raw&safeSearch=Off",
        {
          headers: {
            "x-search-location": "Georgia",
            "x-bingapis-sdk": "true",
            // Change API for new apiKey after this works for testing.
            // "x-rapidapi-key":
            //   "45ddc71006msh100d431d8ce72d4p13d9f4jsn32ec95c8283c",
            // "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
            // useQueryString: true,
          },
        }
      )
      .then((response) => {
        console.log(response.data.value[0].image.url);
        //put params in here or within url so that it just appends articles OR videos to page and then link it to the return stuff located below
        // data.
        //thumbnail image, description/title, when clicked takes you to the article
      });
  }, []);

  return (
    <section className="newsInclusive">
      <div className="container newsContainer container-fluid">
        <h3>News</h3>
        <hr></hr>
        <div className="height">
          <Carousel fade>
            {/* Map through from api on latest 3ish stories?? */}
            <Carousel.Item>
              {/* Attach url in href from api 1 and responsive carousel*/}
              <a href="https://google.com" target="blank">
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/50x12"
                  alt="First slide"
                />
              </a>
              <Carousel.Caption>
                {/* Latest news  */}
                <h3>Headline 1</h3>
                <p className="fontColor">
                  Black Panther 2 won't be moving production in Georgia over
                  Voting Law.
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
          </Carousel>
        </div>
      </div>
    </section>
  );
}
export default NewsJumbo;
