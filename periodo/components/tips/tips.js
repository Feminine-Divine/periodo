import React from "react";
import Navbar from "../navbar";
// import style from  "./tips.module.css";
import Card from "./card";
const tips=[
    {
        tipNumber:"Tip-1",
        tipContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
    },
    {
        tipNumber:"Tip-2",
        tipContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
    },
    {
        tipNumber:"Tip-3",
        tipContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
    }
]
const Tips = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Card props={tips} />
        </div>
    );

}
export default Tips;