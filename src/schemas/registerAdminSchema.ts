import * as yup from "yup";

export const registerAdminSchema = yup.object().shape({
  name: yup.string().required("The name field is mandatory"),
  email: yup.string().required("The email field is mandatory"),
  password: yup.string().required("The password field is mandatory"),
  cpf: yup.string().required("The name cpf is mandatory"),
  phone: yup.string().required("The phone field is mandatory"),
  biography: yup.string(),
  description: yup.string(),
  photo_url: yup.string(),
});
