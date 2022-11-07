import { useRef, useEffect, useContext } from "react";

import MenuContext from "../../Context/MenuContext.js";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Project.css";
import panel_inicio from "./images/panel_inicio.jpg";
import react_ecommerce from "./images/react-ecommerce.png";
import react_hotel_search from "./images/react-hotel-search.jpg";
import fundacion from "./images/fundacion.jpg";
import reforce from "./images/reforce.jpg";
import anovo from "./images/anovo.jpg";
import spotify from "./images/spotify.jpg";

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
    
    const settings = {
        className: "center",
        centerMode: "true",
        infinite: true,
        slidesToShow: 5,
        slidestoScroll: 1,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 3000
    };

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
                    }, 75 * (index + 1))
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

            <div ref={addRef} className="class_project_main">
                <div className="class_project_image_container">
                    <img src={panel_inicio}/>

                    <div className="class_project_icons">
                        <span className="class_project_description_title">
                            <i className="fas fa-briefcase"/>&nbsp;&nbsp;

                            <div className="class_project_title_link">
                                <span>Panel de usuario</span>
                                <span className="class_project_subtitle_link">(<i style={{fontSize: "13px", color: "red"}} className="fas fa-ban"/>)
                                </span>
                            </div>
                        </span>

                        <div className="class_project_icons_separated"/>

                        <div className="class_project_description_technology">
                            <Html/>
                            <Css/>
                            <Javascript/>
                            <Nodejs/>
                            <Mysql/>
                            <Bootstrap/>
                        </div>
                    </div>
                </div>

                <div ref={addRef} className="class_project_image_container">
                    <img src={react_ecommerce}/>

                    <div className="class_project_icons">
                        <a className="class_project_description_title" href="https://cscristianmoreno.github.io/react-ecommerce/" target="_blank">
                            <i className="fas fa-briefcase"/>&nbsp;&nbsp;
                            
                            <div className="class_project_title_link">
                                <span>Tienda e-commerce</span>
                                <span className="class_project_subtitle_link">(Click para navegar)</span>
                            </div>
                        </a>

                        <div className="class_project_icons_separated"/>

                        <div className="class_project_description_technology">
                            <React/>
                            <Html/>
                            <Css/>
                            <Javascript/>
                            <Bootstrap/>
                        </div>
                    </div>
                </div>

                <div ref={addRef} className="class_project_image_container">
                    <img src={react_hotel_search}/>

                    <div className="class_project_icons">
                        <a className="class_project_description_title" href="https://cscristianmoreno.github.io/react-hotel-search/#" target="_blank">
                            <i className="fas fa-briefcase"/>&nbsp;&nbsp;

                            <div className="class_project_title_link">
                                <span>Buscador de hoteles</span>
                                <span className="class_project_subtitle_link">(Click para navegar)</span>
                            </div>
                        </a>

                        <div className="class_project_icons_separated"/>

                        <div className="class_project_description_technology">
                            <React/>
                            <Html/>
                            <Css/>
                            <Javascript/>
                            <Bootstrap/>
                            <Nodejs/>
                        </div>
                    </div>
                </div>

                <div ref={addRef} className="class_project_image_container">
                    <img src={fundacion}/>

                    <div className="class_project_icons">
                        <a className="class_project_description_title" href="https://salta-fundacion-tartamudez.vercel.app/" target="_blank">
                            <i className="fas fa-briefcase"/>&nbsp;&nbsp;

                            <div className="class_project_title_link">
                                <span>Fundación Salteña de Tartamudez</span>
                                <span className="class_project_subtitle_link">(Click para navegar)</span>
                            </div>
                        </a>

                        <div className="class_project_icons_separated"/>

                        <div className="class_project_description_technology">
                            <React/>
                            <Html/>
                            <Css/>
                            <Javascript/>
                            <Bootstrap/>
                        </div>
                    </div>
                </div>

                <div ref={addRef} className="class_project_image_container">
                    <img src={reforce}/>

                    <div className="class_project_icons">
                        <a className="class_project_description_title" href="https://proyecto-reforce.vercel.app/" target="_blank">
                            <i className="fas fa-briefcase"/>&nbsp;&nbsp;

                            <div className="class_project_title_link">
                                <span>Reforce Infinity</span>
                                <span className="class_project_subtitle_link">(Click para navegar)</span>
                            </div>
                        </a>

                        <div className="class_project_icons_separated"/>

                        <div className="class_project_description_technology">
                            <React/>
                            <Html/>
                            <Css/>
                            <Javascript/>
                            <Nodejs/>
                        </div>
                    </div>
                </div>

                <div ref={addRef} className="class_project_image_container">
                    <img src={anovo}/>

                    <div className="class_project_icons">
                        <a className="class_project_description_title" href="https://proyecto-anovo.vercel.app/" target="_blank">
                            <i className="fas fa-briefcase"/>&nbsp;&nbsp;

                            <div className="class_project_title_link">
                                <span>Anovo</span>
                                <span className="class_project_subtitle_link">(Click para navegar)</span>
                            </div>
                        </a>

                        <div className="class_project_icons_separated"/>

                        <div className="class_project_description_technology">
                            <React/>
                            <Html/>
                            <Css/>
                            <Javascript/>
                        </div>
                    </div>
                </div>

                <div ref={addRef} className="class_project_image_container">
                    <img src={spotify}/>

                    <div className="class_project_icons">
                        <a className="class_project_description_title" href="https://cristian-moreno-frontend.vercel.app/#" target="_blank">
                            <i className="fas fa-briefcase"/>&nbsp;&nbsp;

                            <div className="class_project_title_link">
                                <span>Proyecto Spotify (Spotify API)</span>
                                <span className="class_project_subtitle_link">(Click para navegar)</span>
                            </div>
                        </a>

                        <div className="class_project_icons_separated"/>

                        <div className="class_project_description_technology">
                            <React/>
                            <Html/>
                            <Css/>
                            <Javascript/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;