import * as yup from "yup";

export const registerStudentSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().strict(),
});
