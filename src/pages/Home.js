import React from "react";
import Forcast from "../components/Forcast";
import Navbar from "../components/Navbar";
import Music from "../components/Music";
import Goals from "../components/Goals";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Landing Page</h1>
      <section>
        <Forcast />
        <Music />
        <Goals />
      </section>
    </div>
  );
};
export default Home;
