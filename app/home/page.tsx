import React from "react";
import Navbar from "../Components/Navbar";
import MovieVideo from "../Components/MovieVideo";
import RecentlyAdded from "../Components/RecentlyAdded";

function HomePage() {
  return (
    <div className="p-5 lg:p-0">
      <MovieVideo />
      <h1 className="font-bold text-3xl">Recently added</h1>
      <RecentlyAdded/>
    </div>
  );
}

export default HomePage;
