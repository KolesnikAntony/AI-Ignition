import { object, string, bool } from 'yup';
const singUpSchema = object().shape({
  first_name: string().required("First name is required"),
  last_name: string()
    .required("Last name is required"),
  email: string().required("Email is required").email("Email is invalid"),
  password: string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
  subscribe: bool().required()
});
export default singUpSchema
