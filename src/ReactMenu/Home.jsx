import React from "react";
import home_hero from "../images/img2.svg";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const Home = () => {
    return (
        <>
            <Common
                name="Grow your Business with"
                visit="/service"
                btn_text="Get Started"
                img_src={home_hero}
            />
        </>
    )
}

export default Home;