import { useContext, useState } from 'react';
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth';
import { UserContext } from '../../context/UserContext';

interface UserLogin {
  email: string;
  password: string;
}

export const useHomeViewModel = () => {
  const { user, saveUserSession } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [values, setValues] = useState<UserLogin>({
    email: '',
    password: '',
  });

  console.log('USUARIO DE SESSION: ', JSON.stringify(user));

  const onChange = (property: string, value: any): void => {
    setValues({ ...values, [property]: value });
  };
  const login = async (): Promise<void> => {
    if (isValidForm()) {
      const response = await LoginAuthUseCase(
        values.email,
        values.password
      );
      console.log(
        'useHomeViewModel LINE 30 RESPONSE=>',
        JSON.stringify(response)
      );
      if (!response.success) {
        setErrorMessage(response.message);
      } else {
        await saveUserSession(response.data);
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
  return { ...values, user, onChange, login, errorMessage };
};
