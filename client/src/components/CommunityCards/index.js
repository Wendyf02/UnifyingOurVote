import React, { useEffect, useState } from "react";
import "./style.css";
import API from '../../utils/Api'

function CommunityCards() {

  const [events, setEvents] = useState([])

  useEffect(() => {
    API.getEvents()
    .then(res => {
      setEvents(res.data)
    })
  })

  return (
    <div className="Container cardContainer card">
      <div
        className="row firstRow"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* this column can be outside of the loop on line 9? */}
        {/* <div className="col-md-1"></div> */}
        {
          events.map(event => {
            return(
          <div className="col-md-4">
            <div className="card mt-2 cardBackground">
              <div className="card-body">
                <h5 className="card-title">{event.name}</h5>
                <p className="card-text">
                  {event.description}... <br />
                  <a id="linkToEvent" href={`/events/${event._id}`}> 
                    Click to read more
                  </a>
                </p>
              </div>
            </div>
          </div>
          )
          })
        }
      </div>
    </div>
    // </div>
  );
}

export default CommunityCards;
