import React from "react";
import Navbar from "../navbar";
import Content from "./aboutstyle.js";


//import styles from  "../tips/cards.module.css";
//import aboutstyle from "./aboutstyle";
const about=[
    {
        aboutNumber:"TRACK YOUR CYCLE",
        aboutContent:"Eliminate those pesky mood swings and stay in the know with our custom calendar."


    },
    {
      aboutNumber:"CHAT WITH OUR VERY OWN CHATBOT",
      aboutContent:"Tired of Humans? Our friendly neighbourhood chatbot is happy to lend an ear! ",

    },
    {
      aboutNumber:"TAKE CONTROL OF YOUR DIET",
      aboutContent:" Your body is a temple. Visit the tips section to be cognescent of what's best for you.",

    },
    {
      aboutNumber:"GET CUSTOMISED MEDICINAL ADVICE",
      aboutContent:"No amount of pain is worth it. Find expert advice at your doorstep from women who have gone through the same.",

    }
]

const About = () => {
    return (
      <div>
      <Navbar></Navbar>

      <Content props={about} />
      </div>
    );

}
export default About;
