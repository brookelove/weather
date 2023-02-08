import React from "react";
import Forcast from "../components/Forcast";
import Navbar from "../components/Navbar";
import Music from "../components/Music";
import Goals from "../components/Goals";
import "../assets/css/pages/Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Landing Page</h1>
      <section className="containerBox">
        <Forcast />
        <div className="goalMusic">
          <Music />
          <Goals />
        </div>
      </section>
    </div>
  );
};
export default Home;
