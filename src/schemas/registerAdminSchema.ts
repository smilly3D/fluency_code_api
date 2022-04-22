import * as yup from "yup";

export const registerAdminSchema = yup.object().shape({
  name: yup.string().required("Campo de name obrigátorio"),
  email: yup.string().required("Campo de email obrigátorio"),
  password: yup.string().required("Campo de senha obrigátorio"),
  cpf: yup.string().required("Campo de cpf obrigátorio"),
  phone: yup.string().required("Campo de phone obrigátorio"),
  biography: yup.string().required("Campo de biography obrigátorio"),
  description: yup.string().required("Campo de description obrigátorio"),
  photo_url: yup.string(),
});
