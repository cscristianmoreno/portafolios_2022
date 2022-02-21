import Menu from "../Menu/Menu.js";
import Home from "../Home/Home.js";
import About from "../About/About.js";
import Skill from "../Skill/Skill.js";
import Service from "../Service/Service.js";
import Project from "../Project/Project.js";
import "./Body.css";

import { PositionProvider } from "../../Context/MenuContext.js";

const Body = () => {
    return(
        <>
            <PositionProvider>
                <Menu/>
                <div className="class_body_container">
                    <Home/>
                    <About/>
                    <Skill/>
                    <Service/>
                    <Project/>
                </div>
            </PositionProvider>
        </>
    )
}

export default Body;