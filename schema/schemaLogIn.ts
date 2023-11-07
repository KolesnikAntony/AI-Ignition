import Yup from 'yup'
const singUpSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string()
    .required("Last name is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
  subscribe: Yup.bool()
});
export default singUpSchema
