import React from "react";
import "./style.css";
import EventNavbar from "../EventNavbar";
import Footer from "../Footer";

function ActualEvent() {
  return (
    <div id="actualEvent">
      <EventNavbar />
      <div className="container eventContainer">
        <div className="container infoPart1">
          <h1 className="headerTitle">Disability Service Petition</h1>
          <br></br>
          <div className="row styleRow">
            <div className="col"></div>
            <div className="col date">Date: April 7, 2021</div>
            <div className="col location">Location: No location</div>
            <div className="col"></div>
          </div>
          <br></br>
          <div className="row linkRow">
            <div className="col link">
              <a className="eventLink" href="https://www.change.org/" target="_blank">
                Change.org
              </a>
            </div>
          </div>
        </div>

        <div className="row descriptionRow infoPart2">
          <h3 className="hiDescription">Description:</h3>
          <br></br>
          <br></br>
          <p>
            Sed id turpis vitae ipsum dignissim semper eu a eros. Nunc
            condimentum aliquam nibh vitae venenatis. Praesent eu aliquet odio,
            quis tristique ex. Nulla interdum malesuada neque id vehicula. Ut
            lacinia nulla at magna placerat tristique. Phasellus sed porttitor
            lectus. Duis sit amet purus in mi ornare efficitur nec in arcu.
            Pellentesque mauris lectus, viverra id elementum id, sagittis a
            arcu. Sed mollis nec diam tempus pulvinar. Integer consectetur sem
            nisl, vitae molestie justo tincidunt non. Fusce eu lectus vel lacus
            pellentesque ultrices. Sed molestie vehicula diam, et facilisis
            neque cursus eget. Mauris nibh erat, porta sed gravida id,
            sollicitudin in nunc. Quisque lectus mauris, efficitur nec hendrerit
            id, convallis molestie enim. Phasellus eleifend neque nec placerat
            cursus. Aliquam id maximus dui. Praesent at quam nunc. Nullam rutrum
            nunc eros, feugiat cursus mi rutrum hendrerit. Aliquam sed congue
            magna, sed iaculis sapien. Sed rutrum velit eget commodo dictum.
            Curabitur aliquam dolor vel diam placerat, sit amet suscipit massa
            rutrum. Cras nulla justo, euismod at egestas et, posuere a dolor. Ut
            a quam erat. Praesent sed ipsum ac mauris bibendum fringilla. Proin
            sodales turpis eu turpis pulvinar, et rutrum ipsum dignissim. Nulla
            feugiat vel elit eget sodales.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ActualEvent;