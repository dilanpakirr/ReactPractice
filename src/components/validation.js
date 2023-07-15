import * as yup from "yup";

const validation = yup.object().shape({
  firstName: yup.string().required,
  lastName: yup.string().required,
  email: yup.string().email(),
});

export default validation;
