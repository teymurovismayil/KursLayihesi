import * as yup from "yup";


const validations = yup.object().shape({
    email: yup
    .string()
    .email()
    .required("Mecbur"),
    password: yup
    .string()
    .min(5,"Parolunuz en az 5 simvol olmalidir")
    .required(),

});

export default validations