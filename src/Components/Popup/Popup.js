
import { useEffect, useRef } from "react";
import "./Popup.css";

const Popup = ({status}) => {
    const popupRef = useRef();

    const classStatus = (status) ? "class_popup_success" : "class_popup_error";
    const classIcon = (status) ? "fas fa-check-circle" : "fas fa-times-circle";

    
    useEffect(() => {
        setTimeout(() => {
            popupRef.current.classList.add("class_popup_display");
        }, 250);
        
        setTimeout(() => {
            popupRef.current.classList.remove("class_popup_display");
        }, 3000);
    }, []);

    return(
        <div ref={popupRef} className={"class_popup_container " + classStatus}>
            <i className={classIcon}/>
            <span>{(status) ? "Tu mensaje fue enviado" : "Ocurrió un error"}</span>
        </div>
    )
}

export default Popup;