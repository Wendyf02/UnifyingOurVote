import React, { useState, useEffect } from "react";
import API from "../utils/Api";
import { Link } from "react-router-dom";
import "./EventFormPage/style.css";
import EventNavbar from "../components/EventNavbar";

function Events() {
  // Setting our component's initial state
  const [events, setEvents] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all events and store them with setEvents
  useEffect(() => {
    // loadEvents()
    console.log(formObject);
    console.log(
      !(formObject.name && formObject.date && formObject.description)
    );
  }, [formObject]);

  // Loads all events and sets them to events
  function loadEvents() {
    API.getEvents()
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  }

  // Deletes a event from the database with a given id, then reloads events from the db
  function deleteEvent(id) {
    API.deleteEvent(id)
      .then((res) => loadEvents())
      .catch((err) => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, use the API.saveEvent method to save the event data
  // Then reload events from the database
  function handleFormSubmit(event) {
    console.log("");
    event.preventDefault();
    if (formObject.name && formObject.date && formObject.description) {
      API.saveEvent({
        name: formObject.name,
        date: formObject.date,
        location: formObject.location,
        link: formObject.link,
        description: formObject.description,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }

  return (
    <section>
      <EventNavbar/>
      <div className="formContainer">
        {" "}
        <div id="headerJumbo" className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 headerCreate">
              What event would you <br></br> like to create?
            </h1>
          </div>
        </div>
        <div id="eventForm" className="jumbotron jumbotron-fluid">
          {/* <div className="container"> */}
            <div className="form-group">
              <div className="row justify-content-center">
                <div className="col-5">
                  <label>Event Name {events.name}</label>
                  <input
                    name="name"
                    type="name"
                    className="form-control eventName"
                    id="exampleFormControlInput1"
                    placeholder="Required"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-5">
                  <label>Event Link {events.link}</label>
                  <input
                    type="link"
                    className="form-control eventLink"
                    id="exampleFormControlInput1"
                    placeholder="Optional"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <br></br>

              <div className="row justify-content-center">
                <div className="col-5">
                  <label>Event Date {events.date}</label>
                  <input
                    name="date"
                    type="date"
                    className="form-control eventDate"
                    id="exampleFormControlInput1"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-5">
                  <label>Event Location {events.location}</label>
                  <input
                    type="location"
                    className="form-control eventLink"
                    id="exampleFormControlInput1"
                    placeholder="Optional"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="row rowTesting">
                <div className="col-10">
                  <br></br>
                  <label>Event Description {events.description}</label>
                  <textarea
                    name="description"
                    className="form-control eventDescription"
                    id="exampleFormControlTextarea1"
                    placeholder="Required"
                    rows="3"
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>
              <button className="Done" onClick={handleFormSubmit}>Done</button>
            </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}

export default Events;
