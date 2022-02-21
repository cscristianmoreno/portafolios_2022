import { useRef, useEffect, useContext } from "react";

import MenuContext from "../../Context/MenuContext.js";

import "./Menu.css";
import photo from "./images/photo.jpg";

const Menu = () => {
    const itemRef = useRef([]);
    const itemResponsiveRef = useRef([]);
    const imageRef = useRef();
    const imageResponsiveRef = useRef();
    const iconRef = useRef();
    const iconResponsiveRef = useRef();
    const menuResponsiveRef = useRef();

    const { position, itemPosition } = useContext(MenuContext);

    const addRef = (ev) => {
        if (ev && !itemRef.current.includes("ev")) {
            itemRef.current.push(ev);
        }
        // console.log(itemRef.current);
    }

    const addRefResponsive = (ev) => {
        if (ev && !itemResponsiveRef.current.includes("ev")) {
            itemResponsiveRef.current.push(ev);
        }
        // console.log(itemRef.current);
    }

    useEffect(() => {
        setTimeout(() => {
            imageRef.current.classList.remove("image_transition");
        }, 500);

        setTimeout(() => {
            iconRef.current.classList.remove("icon_transition");
        }, 1000);

        setTimeout(() => {

            itemRef.current.forEach((str, index) => {
                setTimeout(() => {
                    
                    str.classList.remove("item_transition");
                }, 250 * (index + 1));
            })
        }, 1500);
    }, []);

    const handledItemMenu = (ev) => {
        window.scrollTo({
            top: loadOffsets(position[ev].current).top,
            left: 0,
            behavior: "smooth"
        });

        menuResponsiveRef.current.classList.toggle("class_menu_position");
        clearMenuElements();
    }

    const loadOffsets = (element) => {
        const rect = element.getBoundingClientRect();
    
        return {
            left: rect.left + window.scrollX,
            top: rect.top + window.scrollY
        };
    }

    let timers = [];

    const handledClickMenu = () => {
        menuResponsiveRef.current.classList.toggle("class_menu_position");

        clearMenuElements();
    }

    const clearMenuElements = () => {
        if (menuResponsiveRef.current.classList.contains("class_menu_position") === true) {
            setTimeout(() => {
                imageResponsiveRef.current.classList.remove("image_transition");
            }, 500);
            
            setTimeout(() => {
                iconResponsiveRef.current.classList.remove("icon_transition");
            }, 700);

            setTimeout(() => {
                itemResponsiveRef.current.forEach((str, index) => {
                    timers.push(
                        setTimeout(() => {
                            str.classList.remove("item_transition");
                        }, 150 * (index + 1))
                    );
                })
            }, 700);
        }
        else {

            imageResponsiveRef.current.classList.add("image_transition");

            iconResponsiveRef.current.classList.add("icon_transition");

            if (timers.length > 0) {
                timers.forEach((str) => {
                    clearTimeout(str);
                })

                timers.length = 0;
            }
            
            itemResponsiveRef.current.forEach((str, index) => {
                str.classList.add("item_transition");
            })
        }
    }

    return(
        <>
            <div className="class_main_menu_icon">
                <i onClick={() => handledClickMenu()} className="fas fa-bars"/>
            </div>

            <div className="class_menu_fake"></div>

            <div className="class_menu_container class_menu_normal">

                <div ref={imageRef} className="class_menu_image image_transition">
                    <img src={photo}/>
                </div>

                <div ref={iconRef} className="class_menu_icon icon_transition">
                    <a href="https://www.facebook.com/cmoreno1234/" target="_blank"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.linkedin.com/in/cristian-moreno-797b1b218/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a href="https://wa.me/+5493874450711" target="_blank"><i className="fab fa-whatsapp"></i></a>
                    <a href="https://github.com/cscristianmoreno" target="_blank"><i className="fab fa-github"></i></a>
                </div>

                <div className="class_menu_items_container">

                    <span onClick={() => handledItemMenu(0)} style={{color: (itemPosition === 0) ? "orange" : "white"}} ref={addRef} className="class_menu_item menu_first item_transition">Inicio</span>
                    <span onClick={() => handledItemMenu(1)} style={{color: (itemPosition === 1) ? "orange" : "white"}} ref={addRef} className="class_menu_item item_transition">Acerca de mí</span>
                    <span onClick={() => handledItemMenu(2)} style={{color: (itemPosition === 2) ? "orange" : "white"}} ref={addRef} className="class_menu_item item_transition">Tecnologías</span>
                    <span onClick={() => handledItemMenu(3)} style={{color: (itemPosition === 3) ? "orange" : "white"}} ref={addRef} className="class_menu_item item_transition">Servicios</span>
                    <span onClick={() => handledItemMenu(4)} style={{color: (itemPosition === 4) ? "orange" : "white"}} ref={addRef} className="class_menu_item item_transition">Proyectos</span>
                </div>
            </div>

            <div ref={menuResponsiveRef} className="class_menu_container class_menu_responsive">

                <div ref={imageResponsiveRef} className="class_menu_image image_transition">
                    <img src={photo}/>
                </div>

                <div ref={iconResponsiveRef} className="class_menu_icon icon_transition">
                    <a href="https://www.facebook.com/cmoreno1234/" target="_blank"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.linkedin.com/in/cristian-moreno-797b1b218/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a href="https://wa.me/+5493874450711" target="_blank"><i className="fab fa-whatsapp"></i></a>
                    <a href="https://github.com/cscristianmoreno" target="_blank"><i className="fab fa-github"></i></a>
                </div>

                <div className="class_menu_items_container">
                    <span onClick={() => handledItemMenu(0)} style={{color: (itemPosition === 0) ? "orange" : "white"}} ref={addRefResponsive} className="class_menu_item menu_first item_transition">Inicio</span>
                    <span onClick={() => handledItemMenu(1)} style={{color: (itemPosition === 1) ? "orange" : "white"}} ref={addRefResponsive} className="class_menu_item item_transition">Acerca de mí</span>
                    <span onClick={() => handledItemMenu(2)} style={{color: (itemPosition === 2) ? "orange" : "white"}} ref={addRefResponsive} className="class_menu_item item_transition">Tecnologías</span>
                    <span onClick={() => handledItemMenu(3)} style={{color: (itemPosition === 3) ? "orange" : "white"}} ref={addRefResponsive} className="class_menu_item item_transition">Servicios</span>
                    <span onClick={() => handledItemMenu(4)} style={{color: (itemPosition === 4) ? "orange" : "white"}} ref={addRefResponsive} className="class_menu_item item_transition">Proyectos</span>
                </div>
            </div>
        </>
    );
}

export default Menu;