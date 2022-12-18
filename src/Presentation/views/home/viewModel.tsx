import { useState } from 'react';

interface UserLogin {
  email: string;
  password: string;
}
export const useHomeViewModel = () => {
  const [values, setValues] = useState<UserLogin>({
    email: '',
    password: '',
  });
  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };
  return { ...values, onChange };
};
