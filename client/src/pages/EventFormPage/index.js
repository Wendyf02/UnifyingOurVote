// import React from "react";
import Navbar from "../../components/CommunityNavbar";
// import EventForm from "../../components/EventForm";

function EventFormPage() {
  return (
    <section>
    <Navbar/>
      <div class="formContainer">
        <div class="jumbotron jumbotron-fluid headerJumbo">
          <div class="container">
            <h1 id="headerCreate" class="display-4">
              What event would you <br /> like to create?
            </h1>
          </div>
        </div>
        <div id="eventForm" class="jumbotron jumbotron-fluid">
          <div class="container">
            <div class="form-group">
              <div class="row justify-content-center">
                <div class="col-1"></div>
                <div class="col-4">
                  <label for="exampleFormControlInput1">Required </label>
                  <input
                    class="eventName"
                    type="name"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Event Name"
                  />
                </div>

                <div class="col-4">
                  <label for="exampleFormControlInput1">Optional </label>
                  <input
                    class="eventLink"
                    type="link"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Event Link"
                  />
                </div>
                <div class="col-1"></div>
              </div>

              <div class="row justify-content-center">
                <div class="col-1"></div>
                <div class="col-4">
                  <label for="exampleFormControlInput1">Required </label>
                  <input
                    class="eventDate"
                    type="date"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Event Date"
                  />
                </div>

                <div class="col-4">
                  <label for="exampleFormControlInput1">Optional </label>
                  <input
                    class="eventLocation"
                    type="location"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Event Location"
                  />
                </div>
                <div class="col-1"></div>
              </div>

              <div class="row justify-content-center">
                <div class="col-2"></div>
                <div class="col-8">
                  <br />
                  <label for="exampleFormControlTextarea1">Required </label>
                  <textarea
                    class="form-control eventDescription"
                    id="exampleFormControlTextarea1"
                    placeholder="Event Description"
                    rows="3"
                  ></textarea>
                </div>
                <div class="col-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventFormPage;
