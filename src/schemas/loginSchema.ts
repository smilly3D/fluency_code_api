import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("The email field is mandatory"),
  password: yup.string().required("The password field is mandatory"),
});
