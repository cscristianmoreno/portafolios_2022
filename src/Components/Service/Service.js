import { useEffect, useRef, useContext } from "react";
import "./Service.css";

import MenuContext from "../../Context/MenuContext.js";

const Service = () => {
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
                setItemPosition(3);

                elementRef.current.forEach((str, index) => {
                    timer.push(
                        setTimeout(() => {
                        str.classList.remove("class_element_display");
                        str.classList.add("class_element_transition");
                    }, 200 * (index + 1))
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
        <div ref={indexRef} className="class_service_container">
            <span ref={addRef} className="class_title"><i className="fas fa-tools"/>Servicios</span>

            <div className="class_service_main">
                <div ref={addRef} className="class_service">
                    <div className="class_service_icon_container">
                        <div className="class_service_icon">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>

                    <span className="class_service_icon_title">Responsive</span>
                    <span className="class_service_icon_description">Diseño adaptable a dispositivos móviles</span>
                </div>

                <div ref={addRef} className="class_service ">
                    <div className="class_service_icon_container">
                        <div className="class_service_icon">
                            <i className="fas fa-code"></i>
                        </div>
                    </div>

                    <span className="class_service_icon_title">Desarrollador</span>
                    <span className="class_service_icon_description">Conocimientos en desarrollo de sitios web</span>
                </div>

                <div ref={addRef} className="class_service">
                    <div className="class_service_icon_container">
                        <div className="class_service_icon">
                            <i className="fas fa-hands-helping"></i>
                        </div>
                    </div>

                    <span className="class_service_icon_title">Asistente</span>
                    <span className="class_service_icon_description">Asistente en otros proyectos</span>
                </div>
            </div>

            <div className="class_service_main">
                <div ref={addRef} className="class_service">
                    <div className="class_service_icon_container">
                        <div className="class_service_icon">
                            <i className="fas fa-cogs"></i>
                        </div>
                    </div>

                    <span className="class_service_icon_title">Soporte</span>
                    <span className="class_service_icon_description">Soporte a tus proyectos</span>
                </div>

                <div ref={addRef} className="class_service">
                    <div className="class_service_icon_container">
                        <div className="class_service_icon">
                            <i className="fas fa-user-clock"></i>
                        </div>
                    </div>

                    <span className="class_service_icon_title">Full-time</span>
                    <span className="class_service_icon_description">Tiempo completo para cualquier proyecto.</span>
                </div>

                <div ref={addRef} className="class_service">
                    <div className="class_service_icon_container">
                        <div className="class_service_icon">
                            <i className="fas fa-bug"></i>
                        </div>
                    </div>

                    <span className="class_service_icon_title">Soluciones</span>
                    <span className="class_service_icon_description">Solución y reparación de errores</span>
                </div>
            </div>
        </div>
    );
}

export default Service;