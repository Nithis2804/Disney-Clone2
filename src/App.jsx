// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// eslint-disable-next-line no-unused-vars
import React from "react";
//import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import ProductionHouse from "./components/ProductionHouse";
import GenreMovieList from "./components/GenreMovieList";

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  );
}

export default App;
