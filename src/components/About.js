import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
  <h2>About Me</h2>
  <p>Anything you write in here will show on browser </p>
  <img src={image} alt="I made this" />
  </div>;
}

export default About;
