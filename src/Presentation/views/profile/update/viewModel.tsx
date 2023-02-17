import { useState, useContext } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { UpdateUserUseCase } from '../../../../Domain/useCases/user/UpdateUser';
import { UpdateWithImageUserUseCase } from '../../../../Domain/useCases/user/UpdateWithImageUser';
import { User } from '../../../../Domain/entities/User';
import { ResponseApiDelivery } from '../../../../Data/sources/remote/models/ResponseApiDelivery';
import { UserContext } from '../../../context/UserContext';

export const useProfileUpdateViewModel = (user: User) => {
  // HOOKS
  const { saveUserSession } = useContext(UserContext);
  // STATE
  const [values, setValues] = useState<User>(user);
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
  const onChangeInfoUpdate = (
    name: string,
    lastname: string,
    phone: string
  ) => {
    setValues({ ...values, name, lastname, phone });
  };
  const update = async () => {
    if (isValidForm()) {
      setloading(true);
      let response = {} as ResponseApiDelivery;
      if (values.image?.includes('https://firebasestorage')) {
        response = await UpdateUserUseCase(values);
      } else {
        response = await UpdateWithImageUserUseCase(values, file!);
      }
      setloading(false);
      console.log(
        'useRegisterViewModel LINE 64 => RESPONSE',
        JSON.stringify(response)
      );
      if (response.success) {
        await saveUserSession(response.data);
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
    return true;
  };
  return {
    ...values,
    user,
    loading,
    errorMessage,
    onChange,
    onChangeInfoUpdate,
    update,
    pickImage,
    takePhote,
  };
};
