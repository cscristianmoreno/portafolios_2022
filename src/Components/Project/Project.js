import { useRef, useEffect, useContext } from "react";

import MenuContext from "../../Context/MenuContext.js";

import "./Project.css";
import panel_inicio from "./images/panel_inicio.jpg";
import react_ecommerce from "./images/react-ecommerce.png";

import Html from "../Skill/images/Html.js";
import Css from "../Skill/images/Css.js";
import Javascript from "../Skill/images/Javascript.js";
import Nodejs from "../Skill/images/Nodejs.js";
import Mysql from "../Skill/images/Mysql.js";
import React from "../Skill/images/React.js";
import Bootstrap from "../Skill/images/Boostrap.js";

const Project = () => {
    const elementRef = useRef([]);
    const indexRef = useRef();

    const { position, setPosition, setItemPosition } = useContext(MenuContext);

    const addRef = (ev) => {
        // elementRef.current.classList.add("class_element_display");
        if (ev && !elementRef.current.includes(ev)) {
            elementRef.current.push(ev);
        }
    }

    useEffect(() => {
        position.push(indexRef);
        setPosition(position);
        let timer = [];
        const observer = new IntersectionObserver((entries) => {
            
            if (entries[0].isIntersecting === true) {
                setItemPosition(4);

                elementRef.current.forEach((str, index) => {
                    timer.push(
                        setTimeout(() => {
                        str.classList.remove("class_element_display");
                        str.classList.add("class_element_transition");
                    }, 100 * (index + 1))
                    )
                })
            }
            else {
                if (timer.length > 0) {
                    timer.forEach((str) => {
                        clearTimeout(str);
                    })
                }

                elementRef.current.forEach((str) => {
                    str.classList.add("class_element_display");
                    // str.classList.remove("class_element_transition");
                })
            }
        }, { 
            rootMargin: "-50% 0px -50% 0px"
        });

        observer.observe(indexRef.current);
    }, []);

    return(
        <div ref={indexRef} className="class_project_container">
            <span ref={addRef} className="class_title"><i className="fas fa-briefcase"/>Proyectos</span>

            <div className="class_project_main">
                <div className="class_project_image_container">
                    <img ref={addRef} src={panel_inicio}/>

                    <div className="class_project_description_container">
                        <div className="class_project_description_title">
                            <span ref={addRef} >INFORMACIÓN DEL PROYECTO</span>
                        </div>

                        <div ref={addRef} className="class_project_description_technology">
                            <Html/>
                            <Css/>
                            <Javascript/>
                            <Nodejs/>
                            <Mysql/>
                            <Bootstrap/>
                        </div>

                        <div className="class_project_description_date">
                            <span ref={addRef} className="class_project_description_date_title">Inicio:</span>
                            <span ref={addRef}>2021</span>
                        </div>

                        <div className="class_project_description_date">
                            <span ref={addRef} className="class_project_description_date_title">Categoría:</span>
                            <span ref={addRef}>Panel de usuario</span>
                        </div>

                        <div className="class_project_description_date">
                            <span ref={addRef} className="class_project_description_date_title">Enlace:</span>
                            <span ref={addRef}>-</span>
                        </div>
                    </div>
                </div>

                <div className="class_project_image_container">
                    <img ref={addRef} src={react_ecommerce}/>

                    <div className="class_project_description_container">
                        <div className="class_project_description_title">
                            <span ref={addRef}>INFORMACIÓN DEL PROYECTO</span>
                        </div>

                        <div ref={addRef }className="class_project_description_technology">
                            <React/>
                            <Html/>
                            <Css/>
                            <Javascript/>
                            <Bootstrap/>
                        </div>

                        <div className="class_project_description_date">
                            <span ref={addRef} className="class_project_description_date_title">Inicio:</span>
                            <span ref={addRef}>2022</span>
                        </div>

                        <div className="class_project_description_date">
                            <span ref={addRef} className="class_project_description_date_title">Categoría:</span>
                            <span ref={addRef}>Ecommerce</span>
                        </div>

                        <div className="class_project_description_date">
                            <span ref={addRef} className="class_project_description_date_title">Enlace:</span>
                            <a href="https://cscristianmoreno.github.io/react-ecommerce/" target="_blank">
                                <i ref={addRef} className="fas fa-link"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;