import React from "react";
import { Link } from "react-router-dom";


function EventFormPage() {
    return (
        <main class="mt-10 w-screen mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 shadow-2xl">
            <div class="sm:text-center lg:text-center">
            <h1 class="text-4xl mt-15 tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block text-red-200 xl:inline"> Welcome to the </span>
              <span class="block text-white xl:inline"> Community Page!!! </span>
            </h1>
            <h3 class="text-4xl mt-15 tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block text-blue-200 xl:inline"> Where you can get the most recent updates </span>
              <span class="block text-blue xl:inline"> and help make sure everyone has the right to vote...   </span>
            </h3>

            <br></br>
            <br></br>

            <div class="mt-10 w-screen mx-auto shadow-inner">
                <div class="mt-15 text-center text-white font-bold text-4xl bg-gradient-to-r from-green-600 to-green-700">
                    <br></br>
                    <div class="max-w-auto text-center justify-center mx-8xl">
                        <h2>
                            News Article
                        </h2>
                        <p>
                            A free forum to share and discuss favorite reads. 
                        </p>
                    </div>
                    <br></br>
                </div>
            </div>

            </div>
            <Link to="/login"> Placeholder link to login </Link>
            <Link to="/register"> Placeholder link to register </Link>
        </main>
    )
}

export default EventFormPage;