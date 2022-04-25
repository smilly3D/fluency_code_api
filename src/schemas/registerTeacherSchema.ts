import * as yup from "yup";

export const registerTeacherSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  cpf: yup.string().required(),
  phone: yup.string().required(),
  biography: yup.string().required(),
  description: yup.string().required(),
  photo_url: yup.string(),
  github: yup.string().required(),
  hour: yup.number().required(),
});
