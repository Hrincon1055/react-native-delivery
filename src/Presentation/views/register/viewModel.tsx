import { useState } from 'react';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';
import * as ImagePicker from 'expo-image-picker';

interface UserRegister {
  email: string;
  password: string;
  name: string;
  lastname: string;
  phone: string;
  confirPassword: string;
  image?: string;
}
export const useRegisterViewModel = () => {
  // STATE
  const [values, setValues] = useState<UserRegister>({
    name: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
    confirPassword: '',
    image: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();
  // FUNCIONES
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      onChange('image', result.assets[0].uri);
      setFile(result.assets[0]);
    }
  };
  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };
  const register = async () => {
    if (isValidForm()) {
      const response = await RegisterAuthUseCase(values);
      console.log(
        'useRegisterViewModel LINE 46 => RESPONSE',
        JSON.stringify(response)
      );
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
  return { ...values, errorMessage, onChange, register, pickImage };
};
