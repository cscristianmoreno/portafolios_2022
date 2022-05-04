import "./About.css";
import { useContext, useEffect, useRef, useState } from "react";
import photo from "./images/photo.jpg";
import MenuContext from "../../Context/MenuContext.js";

const About = () => {
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
                setItemPosition(1);

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

                elementRef.current.forEach((str, index) => {
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
        <div ref={indexRef} className="class_about_container">
            <div className="class_about">
                <div className="class_about_image">
                    <div ref={addRef} className="class_about_image_container effect_image_container">
                        <img ref={addRef} src={photo}/>
                    
                        <div ref={addRef} className="class_about_image_text">
                            <div className="class_about_text">
                                <span className="class_about_text_title">Nombre:</span>
                                <span>Cristian</span>
                            </div>

                            <div className="class_about_text">
                                <span className="class_about_text_title">Apellido:</span>
                                <span>Moreno</span>
                            </div>

                            <div className="class_about_text">
                                <span className="class_about_text_title">Edad:</span>
                                <span>25</span>
                            </div>

                            <div className="class_about_text">
                                <span className="class_about_text_title">País:</span>
                                <span>Argentina</span>
                            </div>

                            <div className="class_about_text">
                                <span className="class_about_text_title">Provincia:</span>
                                <span>Salta</span>
                            </div>
                        </div>
                    </div>

                    <div ref={addRef} className="class_skill_personal_container">
                        <span className="class_skill_personal_title">COMUNICACIÓN</span>
                        <div className="class_about_skill_bar class_skill_personal_communication">
                        </div>
                    </div>

                    <div ref={addRef} className="class_skill_personal_container">
                        <span className="class_skill_personal_title">CREATIVIDAD</span>
                        <div className="class_about_skill_bar class_skill_personal_creativity"></div>
                    </div>

                    <div ref={addRef} className="class_skill_personal_container">
                        <span className="class_skill_personal_title">DEDICACIÓN</span>
                        <div className="class_about_skill_bar class_skill_personal_dedication"></div>
                    </div>

                    <div ref={addRef} className="class_skill_personal_container">
                        <span className="class_skill_personal_title">DISPONIBILIDAD</span>
                        <div className="class_about_skill_bar class_skill_personal_time"></div>
                    </div>

                    <div ref={addRef} className="class_skill_personal_container">
                        <span className="class_skill_personal_title">COMPROMISO</span>
                        <div className="class_about_skill_bar class_skill_personal_compromise"></div>
                    </div>

                    <div ref={addRef} className="class_skill_personal_container">
                        <span className="class_skill_personal_title">MOTIVACIÓN</span>
                        <div className="class_about_skill_bar class_skill_personal_motivation"></div>
                    </div>
                </div>

                <div className="class_about_me">
                    <span ref={addRef} className="class_about_me_title">Acerca de mí</span>

                    <p ref={addRef}>
                        Hola, mi nombre es Cristian Moreno, tengo 25 años y soy de Argentina. Me considero una persona autodidacta y mi pasión por la programación y compromiso me llevó al camino que estoy tomando hoy
                    </p>

                    <p ref={addRef}>
                        Empecé mi travesía en el mundo del desarollo web en el año 2021 introduciéndome en sitios, videos y guías que difunden el conocimiento y las herramientas necesarias
                        para empezar.
                    </p>

                    <span ref={addRef} className="class_about_interest_title">Intereses</span>

                    <div className="class_main_icon_container">
                        <div ref={addRef} className="class_icon_container">
                            <i className="fas fa-biking"></i>
                            <span>BICICLETA</span>
                        </div>

                        <div ref={addRef} className="class_icon_container">
                            <i className="fas fa-coffee"></i>
                            <span>CAFÉ</span>
                        </div>

                        <div ref={addRef} className="class_icon_container">
                            <i className="fas fa-music"></i>
                            <span>MÚSICA</span>
                        </div>

                        <div ref={addRef} className="class_icon_container">
                            <i className="fas fa-dumbbell"></i>
                            <span>GYM</span>
                        </div>

                        <div ref={addRef} className="class_icon_container">
                            <i className="fas fa-walking"></i>
                            <span>CAMINATAS</span>
                        </div>

                        <div ref={addRef} className="class_icon_container">
                            <i className="fas fa-gamepad"></i>
                            <span>JUEGOS</span>
                        </div>

                        <div ref={addRef} className="class_icon_container">
                            <i className="fas fa-guitar"></i>
                            <span>COMPOSICIÓN</span>
                        </div>

                        <div ref={addRef} className="class_icon_container">
                            <i className="fas fa-map-marked-alt"></i>
                            <span>VIAJES</span>
                        </div>
                    </div>

                    <div className="class_about_button_container">
                        <a href="https://drive.google.com/uc?export=download&id=1eZq0EHwuqKW6e9bzcMeJ3B7tDWCRzHTs" target="_blank">
                            <button ref={addRef} className="class_button_cv">Descargar CV</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;