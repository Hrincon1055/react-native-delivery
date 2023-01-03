import { AuthRepositoryImpl } from '../../../Data/repositories/AuthRepository';
import { User } from '../../entities/User';
import { ResponseApiDelivery } from '../../../Data/sources/remote/models/ResponseApiDelivery';
import * as ImagePicker from 'expo-image-picker';
const { registerWithImage } = new AuthRepositoryImpl();
export const RegisterWithImageAuthUseCase = async (
  user: User,
  file: ImagePicker.ImagePickerAsset
): Promise<ResponseApiDelivery> => {
  return await registerWithImage(user, file);
};
