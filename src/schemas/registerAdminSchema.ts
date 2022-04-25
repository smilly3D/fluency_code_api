import * as yup from "yup";

export const registerAdminSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  cpf: yup.string().required(),
  phone: yup.string().required(),
  biography: yup.string(),
  description: yup.string(),
  photo_url: yup.string(),
});
