import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import CommunityJumbo from "../../components/CommunityJumbotron/CommunityJumbo";
import NewsJumbo from "../../components/NewsJumbo/NewsJumbo";
// import Capitol from "../../assets/images/Capitol"



function EventFormPage() {
    return (
        <main>
            <div>
                <Navbar/>
                < div class="container jumbotronContainer">
                    <CommunityJumbo/>
                    <NewsJumbo/>
                </div>
                <h3 class="text-4xl mt-15 tracking-tight    font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span class="block text-blue-200 xl:inline"> Where you can help make real change... </span>
                    <span class="block text-blue xl:inline"> and help make sure everyone has the right to vote...   </span>
                </h3>

                <br></br>
                <br></br>
                <div class="form-container w-full pl-16 form font-extrabold">
                    <br> </br>
                    <form class=" pl-8">
                        <label class="p-2 text-gray-800" for="name">What event do you want to create?:
                        </label>
                        <input class="bg-gradient-to-b from-blue-800 to-blue-900 text-white rounded-lg p-2"       type="text" id="name" name="name">
                        </input>
                        <br></br>
                        
                        <label class="p-2 text-gray-800" for="caption">Evet Name:
                        </label>                        
                        <input class="bg-gradient-to-b from-blue-800 to-blue-900 text-white rounded-lg p-2" type="text" id="caption" name="caption">
                        </input>
                        <br></br>

                        <label class="p-2 text-gray-800"for="eventType">Select Event:</label>
                        <select class="bg-gradient-to-b from-blue-800 to-blue-900 text-white rounded-lg p-4" id="eventName" name="cars">
                            <option value="organize"> Organize a Rally </option>
                            <option value="petition"> Start a Petition </option>
                            <option value="senator"> Get Information for Local Senator</option>
                            <option value="prosecutor"> Get Information for Local Prosecutor</option>
                        </select>
                        
                        <br></br>
                        
                        <label class="p-2 text-gray-800" for="favoriteBook">Event Description:
                        </label>
                        <input class="bg-gradient-to-b from-blue-800 to-blue-900 text-white rounded-lg p-2" type="text" id="favoriteBook" name="eventDescription">
                        </input>
                        <br></br>
                        
                        <label class="p-2 text-gray-800 text-left" for="postTitle">Event Date:</label>
                        <input class="bg-gradient-to-b from-blue-800 to-blue-900 text-white rounded-lg p-2" type="text" id="postTitle" name="eventDate">
                        </input>

                        <br></br>
                        
                        <label class="p-2 text-gray-800 text-left" for="postBody">Event Location:</label>
                        <textarea class="bg-gradient-to-b from-blue-800 to-blue-900 text-white rounded-lg p-2 w-16 text-left" name="message" id="eventLocation" style="width:500; height:300;">
                        </textarea>

                        <br></br>

                        <label class="p-2 text-gray-800 text-left" for="postTitle">Enter Link for more Information:</label>
                        <input class="bg-gradient-to-b from-blue-800 to-blue-900 text-white rounded-lg p-2" type="text" id="postTitle" name="eventMoreInfo">
                        </input>

                        <br></br>
                    </form>
                    <br></br>
                    <div class="mb-1 mx-3xl font-extrabold text-3xl text-yellow-100 text-center">
                        <div class="inline-block bg-gradient-to-b from-blue-600 to-blue-700 mx-10 px-10 directory shadow-2xl">
                            <button id="submitBtn" class="mx-4xl m-3 new-post-submit">Submit</button> 
                        </div>
                        <br></br>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default EventFormPage;