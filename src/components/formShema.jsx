import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/   

export const formSchema = yup.object().shape({
    firstName: yup.string().matches(/^[a-zA-Z]/, 'Please enter your first  name').required("First name is required"),
    lastName: yup.string().matches(/^[a-zA-Z]/,'Please enter your last  name').required("Last name is required"),
    phonenum: yup.string().matches(phoneRegExp, "Phone number is not valid").required("Contact number is required"),
    email: yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email').required('Email is required'),
});
