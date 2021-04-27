import React from "react";
import DatePicker from "../DatePicker";
import "./style.css"
import "react-datepicker/dist/react-datepicker.css";

function EventFormPage() {
    return (
        <main>
            <section class="formContainer">
    <div class="jumbotron jumbotron-fluid headerJumbo">
      <div class="container">
            <h2 class="display-4 headerCreate" style="font-weight: 500;">
                Where you can help make real change... 
            </h2>
            <div><br /> <br /></div>
            <h2 class="display-4 headerCreate" style="font-weight: 500;">
                and help make sure everyone has the right to vote... 
            </h2>
        </div>
    </div>
    <div><br /> <br /></div>
    <div class="jumbotron jumbotron-fluid eventForm"> 
      <div class="container"> </div>
        <div class="form-group"> </div>
          <div class="row justify-content-center">
          <div class="col-1"></div>
          <div class="col-4">

          <div class="mt-4" id="eventSelectEvent">
          <span class="text-gray-700">Select Event</span>
            <div class="mt-2">
            <label for="exampleFormControlInput1">Required 
            <input /> type="radio" class="form-radio text-red-600"  name="selectEvent" value="organize-a-rally" checked
            <span class="ml-2">Organize a Rally</span>
            </label>

            <label for="exampleFormControlInput1">Required 
            <input /> type="radio" class="form-radio text-red-600"  name="selectEvent" value="organize-a-rally" checked
            <span class="ml-2">Start a Petition</span>
            </label>

            <label for="exampleFormControlInput1">Required 
            <input /> type="radio" class="form-radio text-red-600"  name="selectEvent" value="organize-a-rally" checked
            <span class="ml-2">Contact local Senator</span>
            </label>
          </div>

          <label for="exampleFormControlInput1">Required
            <span class="text-gray-700">What will be taking place at this event?:</span>
            <input class="eventName" type="name" class="form-control" id="exampleFormControlInput1" placeholder="Event Description Here">
            </input>
        
        <div class="row .justify-content-center">
          <div class="col-1"></div>
          <div class="col-4">
          <label class="block">
                <span class="text-gray-700">Select Event Date:</span>
                <input />
                    <DatePicker/>            
            </label>
        
        <div class="col-4">
          <label for="exampleFormControlInput1">Event Location? </label>
          <input class="eventLink" type="link" class="form-control" id="exampleFormControlInput1" placeholder="Event Location?">
          </input>
          <div class="col-1"></div>
        </div>

        <div class="col-4">
          <label for="exampleFormControlInput1" class="text-gray-700">>Required </label>
          <input class="eventLink" type="link" class="form-control" id="exampleFormControlInput1" placeholder="Event Link">
          </input>
          <div class="col-1"></div>
        </div>
          <div class="col-2"></div>
          <div class="col-8">
            <br> </br>
        </div>
        </div>
      </div>
    </ label>
    </div>
    </ div>
    </ div>
    </ div>
</ section>
</main>
    
    
);
}
export default EventFormPage;