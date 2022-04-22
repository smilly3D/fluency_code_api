import * as yup from "yup";

export const registerStudentSchema = yup.object().shape({
  name: yup.string().required("The name field is mandatory"),
  email: yup.string().required("The email field is mandatory"),
  password: yup.string().required("The name field is mandatory"),
});
