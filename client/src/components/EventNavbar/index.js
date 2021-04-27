import React from "react";
import "./style.css";

function EventNavbar() {
  return (
    <nav className="navbar navbar-expand-lg backgroundNav2">
      <a className="navbar-brand" href="/">
        UnifyingOurVote
      </a>
      <div
        className="collapse navbar-collapse topnav-right"
        id="navbarSupportedContent"
      >
        <a className="yourCommunity" href="/YourCommunity">
          <button class="backCommunity" type="submit">
            Community Page
          </button>
        </a>
      </div>
    </nav>
  );
}
export default EventNavbar;
