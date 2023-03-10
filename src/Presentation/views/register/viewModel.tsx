import { useState } from 'react';

import * as ImagePicker from 'expo-image-picker';
import { RegisterWithImageAuthUseCase } from '../../../Domain/useCases/auth/RegisterWithImageAuth';
import { SaveUserLocalUseCase } from '../../../Domain/useCases/userLocal/SaveUserLocal';
import { useUserLocal } from '../../hooks/useUserLocal';

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
  // HOOKS
  const { user, getUserSession } = useUserLocal();
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
  const [loading, setloading] = useState<boolean>(false);

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
  const takePhote = async () => {
    let result = await ImagePicker.launchCameraAsync({
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
      setloading(true);
      // const response = await RegisterAuthUseCase(values);
      const response = await RegisterWithImageAuthUseCase(
        values as any,
        file!
      );
      setloading(false);
      console.log(
        'useRegisterViewModel LINE 70 => RESPONSE',
        JSON.stringify(response)
      );
      if (response.success) {
        await SaveUserLocalUseCase(response.data);
        getUserSession();
      } else {
        setErrorMessage(response.message);
      }
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
      setErrorMessage('Ingresa la contrase??a.');
      return false;
    }
    if (values.confirPassword === '') {
      setErrorMessage('Ingresa la confirmacion de la contrase??a.');
      return false;
    }
    if (values.password !== values.confirPassword) {
      setErrorMessage('Las contrase??as no son iguales.');
      return false;
    }
    if (values?.image === '') {
      setErrorMessage('Seleccione una imagen.');
      return false;
    }
    return true;
  };
  return {
    ...values,
    user,
    loading,
    errorMessage,
    onChange,
    register,
    pickImage,
    takePhote,
  };
};
