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
import search_image from "./images/search_image.jpg";
import profesor_matematicas from "./images/profesor_matematicas.jpg";
import electronic_shop from "./images/electronic_shop.jpg";

import Html from "../Skill/images/Html.js";
import Css from "../Skill/images/Css.js";
import Javascript from "../Skill/images/Javascript.js";
import Nodejs from "../Skill/images/Nodejs.js";
import Mysql from "../Skill/images/Mysql.js";
import React from "../Skill/images/React.js";
import Bootstrap from "../Skill/images/Boostrap.js";
import Sqlite from "../Skill/images/Sqlite.js";
import Typescript from "../Skill/images/Typescript.js";

const PROJECTS = [
    { name: "Panel de usuario", image: panel_inicio, url: "https://panel-de-usuario.vercel.app", icons: [<Html/>, <Css/>, <Javascript/>, <Nodejs/>, <Mysql/>, <Bootstrap/>], payment: 0 },
    { name: "Tienda e-commerce", image: react_ecommerce, url: "https://cscristianmoreno.github.io/react-ecommerce/", icons: [<React/>, <Html/>, <Css/>, <Javascript/>, <Bootstrap/>], payment: 0 },
    { name: "Buscador de hoteles", image: react_hotel_search, url: "https://cscristianmoreno.github.io/react-hotel-search/#", icons: [<React/>, <Html/>, <Css/>, <Javascript/>, <Bootstrap/>, <Nodejs/>], payment: 0 },
    { name: "Fundación Salteña de Tartamudez", image: fundacion, url: "https://salta-fundacion-tartamudez.vercel.app/", icons: [<React/>, <Html/>, <Css/>, <Javascript/>, <Bootstrap/>], payment: 0 },
    { name: "Reforce Infinity", image: reforce, url: "https://proyecto-reforce.vercel.app/", icons: [<React/>, <Html/>, <Css/>, <Javascript/>, <Nodejs/>], payment: 1 },
    { name: "Anovo", image: anovo, url: "https://proyecto-anovo.vercel.app/", icons: [<React/>, <Html/>, <Css/>, <Javascript/>], payment: 1 },
    { name: "Proyecto Spotify", image: spotify, url: "https://cristian-moreno-frontend.vercel.app/#", icons: [<React/>, <Html/>, <Css/>, <Javascript/>], payment: 0 },
    { name: "Search Image", image: search_image, url: "", icons: [<React/>, <Css/>, <Javascript/>, <Sqlite/>], payment: 0 },
    { name: "Profesor de matemáticas", image: profesor_matematicas, url: "https://proyecto-rodrigo-torres.vercel.app/", icons: [<React/>, <Html/>, <Css/>, <Typescript/>], payment: 1 },
    { name: "Electronic Shop", image: electronic_shop, url: "https://angular-ecommerce-phi.vercel.app/", icons: [<React/>, <Html/>, <Css/>, <Typescript/>], payment: 0 },
]

const PROJECTS_DESCRIPTION = [
    "Simple panel de usuarios que utiliza la API de Mercado Pago para realizar transferencias.",
    "Este proyecto simula un E-Commerce, permite almacenar y eliminar tus productos.",
    "Este proyecto utiliza la API de Impala Travel para obtener sus hoteles, simula una página de hoteles.",
    "Este proyecto brinda información y asesoría a personas con tartamudez.",
    "Reforce Infinity es un proyecto realizado para una compañía de desarrollo relacionado al metaverso.",
    "Anovo es un proyecto realizado para una compañía el cual se ocupa de brindar soluciones.",
    "Este proyecto utiliza la API de Spotify para obtener los álbumes de los usuarios.",
    "Esta app utiliza la API de Pexels y una base de datos para buscar y almacenar imágenes.",
    "Este proyecto éstá hecho para un profesor de matemáticas.",
    "Comercio electrónico minimalista realizado con Angular.",
]

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
        // className: "center",
        // centerMode: "true",
        infinite: true,
        slidesToShow: 1,
        slidestoScroll: 1,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 10000
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

            <div className="class_project_slider_container">

                <Slider {...settings} className="class_project_main">

                    {
                        PROJECTS.map((str, num) => {
                            return(
                                <div key={num} className="class_project_image_container">
                                    <img src={str.image}/>

                                    <div className="class_project_icons">
                                        {
                                            (str.url.length) ?
                                                <div className="class_project_description_container">
                                                    <a className="class_project_description_title" href={str.url} target="_blank">
                                                        <i className="fas fa-briefcase"/>&nbsp;&nbsp;
                                                        
                                                        <div className="class_project_title_link">
                                                            <span>{str.name} {(str.payment) ? <span className="class_project_payment">&nbsp;(FREELANCE)</span> : null}</span>
                                                            <span className="class_project_subtitle_link">(Click para navegar)</span>
                                                        </div>

                                                    </a>

                                                    <span className="class_project_page">{num + 1} / {PROJECTS.length}</span>
                                                </div>
                                            :
                                                <div className="class_project_description_container">
                                                    <span className="class_project_description_title">
                                                        <i className="fas fa-briefcase"/>&nbsp;&nbsp;

                                                        <div className="class_project_title_link">
                                                            <span>{str.name}</span>
                                                            <span className="class_project_subtitle_link">(<i style={{fontSize: "13px", color: "red"}} className="fas fa-ban"/>)
                                                            </span>
                                                        </div>
                                                    </span>
                                                    
                                                    <span className="class_project_page">{num + 1}/{PROJECTS.length}</span>
                                                </div>
                                        }

                                        <div className="class_project_icons_separated"/>
                                        

                                        <div className="class_project_description_text_container">
                                            <span className="class_project_description_text_title">DESCRIPCIÓN:</span>
                                            <span className="class_project_description_text">{PROJECTS_DESCRIPTION[num]}</span>    
                                        </div>

                                        {/* <div className="class_project_icons_separated"/> */}
                                        

                                        <div className="class_project_description_technology">
                                        {
                                            str.icons.map((str) => {
                                                return str;
                                            })
                                        }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    );
}

export default Project;