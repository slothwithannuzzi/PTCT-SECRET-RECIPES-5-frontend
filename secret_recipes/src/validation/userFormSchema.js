import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Username required")
    .min(2, "Username must be at least 2 characters")
    .max(18, "Username cannot be longer than 18 chars"),
  password: yup
  .string()
  .required("Password required")
  .min(6, "Password must be atleast 6 characters")
  .max(30, "Username cannot be longer than 18 chars"),
  email: yup
  .string()
  .required("Email required")
  .email()
});