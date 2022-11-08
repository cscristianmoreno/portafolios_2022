import * as yup from "yup";
const MAX_CHARS = 256;
const MIN_CHARS = 3;

const fieldNoticeRequired = "Este campo es requerido.";
const fieldNoticeMinChars = "El campo requiere al menos " + MIN_CHARS + " carácteres.";
const fieldNoticeMaxChars = "El campo no puede superar los " + MAX_CHARS + " carácteres.";
const fieldNoticeEmail = "El campo tiene que ser un email válido.";


export const Validator = yup.object().shape({
    userName: yup.string().min(MIN_CHARS, fieldNoticeMinChars).max(MAX_CHARS, fieldNoticeMaxChars).required(fieldNoticeRequired),
    userEmail: yup.string().email(fieldNoticeEmail).min(MIN_CHARS, fieldNoticeMinChars).max(MAX_CHARS, fieldNoticeMaxChars).required(fieldNoticeRequired),
    userReason: yup.string().min(MIN_CHARS, fieldNoticeMinChars).max(MAX_CHARS, fieldNoticeMaxChars).required(fieldNoticeRequired),
    userMessage: yup.string().min(MIN_CHARS, fieldNoticeMinChars).max(MAX_CHARS, fieldNoticeMaxChars).required(fieldNoticeRequired)
})

export const checkField = (error) => {
    return <span style={{color: "red"}}>{error}</span>; 
}