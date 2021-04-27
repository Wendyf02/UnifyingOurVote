import React from "react";
import DatePicker from "../DatePicker";
import "./style.css"
import "react-datepicker/dist/react-datepicker.css";

function EventFormPage() {
    return (
        <main>
            <section class="form-container w-full pl-16 form font-extrabold rounded border-2 mt-px mr-8 ml-8 m-auto m-0 w-3/5 h-650px bg-gray-800">
                <div class="jumbotron jumbotron-fluid headerJumbo bg-none divide-white > * + * text-center ">
                    <div class="container">
                        <h2 class="display-4 headerCreate" style="font-weight: 500;">
                Where you can help make real change... </h2>
                        <div><br /> <br /></div>
                        <h2 class="display-4 headerCreate" style="font-weight: 500;">
                and help make sure everyone has the right to vote... </h2>
                    </div>
                </div>
                <div><br /> <br /></div>
                <div class="jumbotron jumbotron-fluid eventForm ml-10 mr-10 rounded border-2 bg-gray-800 divide-white > * + * h-350px"> 
                    <div class="container"> </div>
                    <div class="form-group"> </div>
                    <div class="row justify-content-center">
                        <div class="col-1"></div>
                        <div class="col-4">

                            <div class="mt-4" id="eventSelectEvent">
                            <label for="exampleFormControltextarea1" class="h2 text-white-800"> Select an Event </label>
                                <div class="mt-2">
                                    <label class="inline-flex items-center">
                                        <textarea /> type="radio" class="form-radio text-red-600"  name="selectEvent" value="organize-a-rally" checked
                                        <span class="ml-2">Organize a Rally</span>
                                    </label>
                                    <label class="inline-flex items-center">
                                        <textarea /> type="radio" class="form-radio text-white-600"  name="selectEvent" value="start-a-petition" checked
                                            <span class="ml-2">Start a Petition</span>
                                 
                                    </label>
                                    <label class="inline-flex items-center">
                                        <textarea /> type="radio" class="form-radio text-blue-600"  name="selectEvent" value="contact-local-senator" checked
                                        <span class="ml-2">Contact local Senator</span>
                                    </label>
                                </div>
                            </div>
                            <label for="exampleFormControltextarea1" class="h2 text-white-800"> What will be taking place at this event?: </label>
                            <textarea class="eventName w-160px " type="name" class="form-control" id="exampleFormControltextarea1" placeholder-red-700="Required"></textarea>
                                
                            <div class="row .justify-content-center">
                                <div class="col-1"></div>
                                <div class="col-4">
                                    <label class="block">
                                        <span class="h2text-white-800">Select Event Date:</span>
                                        <textarea class="eventDate w-160px" />
                                        <DatePicker/>            
                                    </label>
                                </ div>
                            </div>
                            <div class="col-4">
                                <label for="exampleFormControltextarea1" class="h2 text-white-800"> Event Location </label>
                                <textarea class="eventLocation w-160px" type="link" class="form-control"         id="exampleFormControltextarea1" placeholder-red-700="Required"></textarea>
                                <div class="col-1"></div>
                            </div>

                            <div class="col-4">
                                <label for="exampleFormControltextarea1" class="h2 text-white-800"> Event Description </label>
                                <textarea class="eventDescription w-320px" type="link" class="form-control"         id="exampleFormControltextarea1" placeholder-red-700="Required"></textarea>
                                <div class="col-1"></div>
                            </div>

                            <div class="col-4">
                                <label for="exampleFormControltextarea1" class="h2text-white-800">Link to more information: </label>
                                <textarea class="eventDescription w-160px" type="link" class="form-control" id="exampleFormControltextarea1" placeholder-red-700="Event Link"></textarea>
                                <div class="col-1"></div>
                            </div>
                            <div class="col-2"></div>
                            <div class="col-8">
                                <br> </br>
                            </div>
                            </div>
                        </ div>
                    </ div>
            </ section>
        </main>
    );
}
export default EventFormPage;