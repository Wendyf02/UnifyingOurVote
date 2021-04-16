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





            </div>
        </main>
    )
}

export default EventFormPage;