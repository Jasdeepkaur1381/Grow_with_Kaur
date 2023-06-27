import React from "react";
import home_hero from "../images/hero-img.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const About = () => {
    return (
        <>
            <Common
                name="Welcome to About Page"
                visit="/contact"
                btn_text="Contact Us"
                img_src={home_hero}
            />
        </>
    )
}

export default About;