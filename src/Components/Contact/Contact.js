import { useEffect, useState, useRef, useContext } from "react";

import MenuContext from "../../Context/MenuContext.js";

import { Formik, Form, Field } from "formik";

import * as yup from "yup";

import Popup from "../Popup/Popup.js";

import "./Contact.css";

import { checkField, Validator } from "./Validation.js";
import axios from "axios";
import Spinner from "../Spinner/Spinner.js";

const Contact = () => {
    const indexRef = useRef();
    const elementRef = useRef([]);

    const { position, setPosition, setItemPosition } = useContext(MenuContext);

    const [spinner, setSpinner] = useState(false);
    const [messageStatus, setMessageStatus] = useState(0);
    const [messageAnnouncement, setMessageAnnouncement] = useState(0);

    useEffect(() => {

        position.push(indexRef);
        setPosition(position);

        let timer = [];
        const observer = new IntersectionObserver((entries) => {
            
            if (entries[0].isIntersecting === true) {
                setItemPosition(5);

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

    const handleSubmit = async (event) => {
        if (spinner) {
            return;
        }

        setSpinner(true);
        setMessageAnnouncement(0);

        const response = await axios({
            method: "POST",
            url: "https://portafolios-backend.vercel.app/send_email",
            params: event
        })
        
        setSpinner(false);
        setMessageStatus(response.data.success);
        setMessageAnnouncement(1);
    }

    return (
        <div ref={indexRef} className="class_service_container">
            <span ref={addRef} className="class_title"><i className="fas fa-user-edit"/>Contacto</span>

            <Formik
                initialValues={{
                    userName: "",
                    userEmail: "",
                    userReason: "",
                    userMessage: ""
                }}
                validationSchema={Validator}
                onSubmit={handleSubmit}
            >
            {({errors, touched}) => (
                <Form className="class_form_container">
                    <div ref={addRef} className="class_field_container">
                        <label for="userName">Nombre completo</label>
                        <Field name="userName" className="class_field_style" placeholder="Nombre"/>
                        {(errors.userName && touched.userName) ? checkField(errors.userName) : null}
                    </div>

                    <div ref={addRef} className="class_field_container">
                        <label for="userEmail">Correo electrónico</label>
                        <Field name="userEmail" className="class_field_style" type="email" placeholder="Correo electrónico"/>
                        {(errors.userEmail && touched.userEmail) ? checkField(errors.userEmail) : null}
                    </div>

                    <div ref={addRef} className="class_field_container">
                        <label for="userReason">Asunto</label>
                        <Field name="userReason" className="class_field_style" placeholder="Asunto"/>
                        {(errors.userReason && touched.userReason) ? checkField(errors.userReason) : null}
                    </div>

                    <div ref={addRef} className="class_field_container">
                        <label for="userMessage">Mensaje</label>
                        <Field as="textarea" className="class_field_style" name="userMessage" placeholder="Mensaje"/>
                        {(errors.userMessage && touched.userMessage) ? checkField(errors.userMessage) : null}
                    </div>

                    {
                        (spinner) ?
                            <button ref={addRef} type="submit" className="class_button_cv class_form_button class_form_button_spinner">
                                <Spinner/>
                            </button>
                        :
                            <button ref={addRef} type="submit" className="class_button_cv class_form_button">
                               Enviar mensaje
                            </button>
                    }

                </Form>
            )}
            </Formik>

            {
                (messageAnnouncement) ?
                    <Popup announcement={messageAnnouncement} status={messageStatus}/>
                :
                    null
            }
        </div>
    )
}

export default Contact;