import { useRef, useEffect, useContext } from "react";

import Html from "./images/Html.js";
import Css from "./images/Css.js";
import MenuContext from "../../Context/MenuContext.js";

import "./Skill.css";
import Javascript from "./images/Javascript.js";
import Nodejs from "./images/Nodejs.js";
import Mysql from "./images/Mysql.js";
import Git from "./images/Git.js";
import React from "./images/React.js";
import Boostrap from "./images/Boostrap.js";
import Jquery from "./images/Jquery.js";
import C from "./images/C.js";
import Sqlite from "./images/Sqlite.js";
import Filezilla from "./images/Filezilla.js";
import ReactNative from "./images/ReactNative.js";


const Skill = () => {
    const indexRef = useRef();
    const elementRef = useRef([]);

    const { position, setPosition, setItemPosition } = useContext(MenuContext);

    useEffect(() => {

        position.push(indexRef);
        setPosition(position);

        let timer = [];
        const observer = new IntersectionObserver((entries) => {
            
            if (entries[0].isIntersecting === true) {
                setItemPosition(2);

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

    const addRef = (ev) => {
        // elementRef.current.classList.add("class_element_display");
        if (ev && !elementRef.current.includes(ev)) {
            elementRef.current.push(ev);
        }
    }

    return(
        <div ref={indexRef} className="class_skill_container">
            <span ref={addRef} className="class_title"><i className="fas fa-code"/>Tecnologías</span>

            <div className="class_skill_icon">
                <div ref={addRef} className="class_skill">
                    <Html/>
                    <span>HTML</span>
                </div>
                
                <div ref={addRef} className="class_skill">
                    <Css/>
                    <span>CSS</span>
                </div>
               
                <div ref={addRef} className="class_skill">
                    <Javascript/>
                    <span>JavaScript</span>
                </div>
            </div>

            <div className="class_skill_icon">
                <div ref={addRef} className="class_skill">
                    <Nodejs/>
                    <span>NodeJS<br/>(Express)</span>
                </div>

                <div ref={addRef} className="class_skill">
                    <Mysql/>
                    <span>MySQL</span>
                </div>

                <div ref={addRef} className="class_skill">
                    <Git/>
                    <span>GIT</span>
                </div>
            </div>

            <div className="class_skill_icon">
                <div ref={addRef} className="class_skill">
                    <React/>
                    <span>React</span>
                </div>

                <div ref={addRef} className="class_skill">
                    <Boostrap/>
                    <span>Bootstrap</span>
                </div>

                <div ref={addRef} className="class_skill">
                    <Jquery/>
                    <span>jQuery</span>
                </div>
            </div>

            <div className="class_skill_icon">
                <div ref={addRef} className="class_skill">
                    <C/>
                    <span>C (Pawn)</span>
                </div>

                <div ref={addRef} className="class_skill">
                    <Sqlite/>
                    <span>SQLite</span>
                </div>

                <div ref={addRef} className="class_skill">
                    <ReactNative/>
                    <span>React Native</span>
                </div>
            </div>
        </div>
    );
}

export default Skill;