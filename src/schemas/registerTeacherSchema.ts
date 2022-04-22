import * as yup from "yup";

export const registerTeacherSchema = yup.object().shape({
  name: yup.string().required("The name field is mandatory"),
  email: yup.string().required("The email field is mandatory"),
  password: yup.string().required("The name field is mandatory"),
  cpf: yup.string().required("The name field is mandatory"),
  phone: yup.string().required("The name field is mandatory"),
  biography: yup.string().required("The name field is mandatory"),
  description: yup.string().required("The name field is mandatory"),
  photo_url: yup.string(),
  github: yup.string().required("The name field is mandatory"),
  hour: yup.number().required("The name field is mandatory"),
});
