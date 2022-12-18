import { useState } from 'react';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';
import { User } from '../../../Domain/entities/User';

interface UserRegister {
  email: string;
  password: string;
  name: string;
  lastname: string;
  phone: string;
  confirPassword: string;
}
export const useRegisterViewModel = () => {
  const [values, setValues] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
    confirPassword: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };
  const register = async () => {
    if (isValidForm()) {
      const response = await RegisterAuthUseCase(values);
      console.log('viewModel LINE 29 => RESULT', JSON.stringify(response));
    }
  };
  const isValidForm = (): boolean => {
    if (values.name === '') {
      setErrorMessage('Ingresa tu nombre.');
      return false;
    }
    if (values.lastname === '') {
      setErrorMessage('Ingresa tus apellidos.');
      return false;
    }
    if (values.phone === '') {
      setErrorMessage('Ingresa tu telefono.');
      return false;
    }
    if (values.email === '') {
      setErrorMessage('Ingresa tu email.');
      return false;
    }
    if (values.password === '') {
      setErrorMessage('Ingresa la contraseña.');
      return false;
    }
    if (values.confirPassword === '') {
      setErrorMessage('Ingresa la confirmacion de la contraseña.');
      return false;
    }
    if (values.password !== values.confirPassword) {
      setErrorMessage('Las contraseñas no son iguales.');
      return false;
    }
    return true;
  };
  return { ...values, errorMessage, onChange, register };
};
