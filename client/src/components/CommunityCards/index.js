import React from "react";
import "./style.css";
import { cards } from "../../cardInfo";

function CommunityCards() {
  return cards.map((card) => {
    return (
      // <div className="Container cardContainer card">
        <div className="row firstRow">
          {/* this column can be outside of the loop on line 9? */}
          {/* <div className="col-md-1"></div> */}
          <div className="col-md-4">
            <div className="card mt-2 cardBackground">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <p className="card-text">
                  {card.description}... <br />
                  <a id="linkToEvent" href="">
                    Click to read more
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      // </div>
    );
  });
}

export default CommunityCards;
