import React from "react";

import Heading from "../heading/Heading";
import Markdown from "../markdown/Markdown";
import ProfilePic from "../../assets/profile-pic.jpg";

import "./About.css";

const aboutMarkdown = `
## Hi 👋, I'm Satrajit
Currently a research associate at [The AirLab, Carnegie Mellon University](https://theairlab.org/)
working with [Professor Sebastian Scherer](https://www.ri.cmu.edu/ri-faculty/sebastian-scherer/).

I like to work, travel, play games (both indoor & outdoor) and specially reading science fiction.
I'm really passionate about artificial intelligence and believe in its ability to craft a better 
future for humanity. I really enjoy programming and developing software and have been involved
in software development for both research and mobile applications for the past 3 years. I'm always trying to 
find new ways of thinking and especially love tackling unsolved problems through novel approaches.

- **Programming Languages**: Python • C++ • Java • Kotlin •
Dart • JavaScript • SQL
- **Frameworks/Libraries**: ROS • TensorFlow • PyTorch • PX4 •
ArduPilot • Django • DLib • OpenCV • Spacy 
- **App Development**: Android Studio • Flutter • Material-UI • Google Firebase • Google Cloud Platform
- **Tools**: Linux • Git • TensorFlow • Docker • MySQL • Unreal Engine
`;

export default function About() {
  return (
    <div className={"about-container"}>
      <Heading heading={"About Me"} />
      <div className={"image-container"}>
        <img src={ProfilePic} alt={"Profile Pic"} />
      </div>
      <Markdown source={aboutMarkdown} />
    </div>
  );
}
