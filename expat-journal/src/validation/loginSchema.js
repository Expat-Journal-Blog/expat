import * as yup from "yup";

export default yup.object().shape({
  //schema is an object
  username: yup
    .string()
    //string or boolean
    .required("Please supply your Username to Login")
    .min(4, "Username must be at least 4 characters to continue"),
  //array has square brackets
  primaryemail: yup
    .string()
    .email("Please supply a Valid Email")
    .required('Email must include the @ and ".com" to register'),
  password: yup
    .string()
    .required("Must have multiple characters")
    .min(8, "Password must be min 8 chars long")
});
