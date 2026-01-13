import * as yup from 'yup';

export const validationUserRegisterSchema = yup.object().shape({
  name: yup.string().min(4, 'Имя пользователя должно быть не менее 4 символов').required('Имя пользователя обязательно'),
  password: yup
    .string()
    .min(6, 'Пароль должен быть не менее 6 символов')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)/,
      'Пароль должен содержать латинские буквы и цифры',
    )
    .required('Введите пароль'),
});
