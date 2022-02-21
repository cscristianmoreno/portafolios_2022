import { useRef, useEffect, useContext  } from "react";
import "./Home.css";

import MenuContext from "../../Context/MenuContext.js";

const Home = () => {
    const titleRef = useRef();
    const subtitleRef = useRef();
    const iconRef = useRef([]);
    const indexRef = useRef();

    const {position, setPosition, setItemPosition} = useContext(MenuContext);

    useEffect(() => {
        position.push(indexRef);
        setPosition(position);

        setTimeout(() => {
            titleRef.current.classList.remove("transition_title");
        }, 1000);

        setTimeout(() => {
            subtitleRef.current.classList.remove("transition_subtitle");
        }, 1500);

        setTimeout(() => {
            iconRef.current.forEach((str, index) => {
                setTimeout(() => {
                    str.classList.remove("icon_transition");
                }, 250 * (index + 1));
            })
        }, 2000);

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting === true) {
                setItemPosition(0);
            }
        }, {threshold: 0.70})

        observer.observe(indexRef.current);
    }, []);

    const addIconRef = (ev) => {
        iconRef.current.push(ev);
    }

    return(
        <div ref={indexRef} className="class_home_container">
            <span ref={titleRef} className="class_home_title transition_title">¡Hola, soy Cristian!</span>
            <span ref={subtitleRef} className="class_home_subtitle transition_subtitle">FRONTEND DEVELOPER</span>

            <div className="class_home_icon_container">
                <a href="https://www.facebook.com/cmoreno1234/" target="_blank"><i ref={addIconRef} className="fab fa-facebook icon_transition"></i></a>
                <a href="https://www.linkedin.com/in/cristian-moreno-797b1b218/" target="_blank"><i ref={addIconRef} className="fab fa-linkedin icon_transition"></i></a>
                <a href="https://wa.me/+5493874450711" target="_blank"><i ref={addIconRef} className="fab fa-whatsapp icon_transition"></i></a>
                <a href="https://github.com/cscristianmoreno" target="_blank"><i ref={addIconRef} className="fab fa-github icon_transition"></i></a>
            </div>
        </div>
    );
}

export default Home;