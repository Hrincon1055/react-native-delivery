import { useState } from 'react';
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth';

interface UserLogin {
  email: string;
  password: string;
}

export const useHomeViewModel = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [values, setValues] = useState<UserLogin>({
    email: '',
    password: '',
  });
  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };
  const login = async () => {
    if (isValidForm()) {
      const response = await LoginAuthUseCase(values.email, values.password);
      console.log('useHomeViewModel LINE 21 =>', JSON.stringify(response));
      if (!response.success) {
        setErrorMessage(response.message);
      }
    }
  };
  const isValidForm = (): boolean => {
    if (values.email === '') {
      setErrorMessage('Ingresa tu Email.');
      return false;
    }
    if (values.password === '') {
      setErrorMessage('Ingresa tu Password.');
      return false;
    }
    return true;
  };
  return { ...values, onChange, login, errorMessage };
};
