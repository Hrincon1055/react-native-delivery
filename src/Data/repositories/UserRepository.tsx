import { ImagePickerAsset } from 'expo-image-picker';
import { AxiosError } from 'axios';
import mime from 'mime';
import { User } from '../../Domain/entities/User';
import { UserRepository } from '../../Domain/repositories/UserRepository';
import { ResponseApiDelivery } from '../sources/remote/models/ResponseApiDelivery';
import {
  ApiDelivery,
  ApiDeliveryForImage,
} from '../sources/remote/api/ApiDelivery';

export class UserRepositoryImpl implements UserRepository {
  public async update(user: User): Promise<ResponseApiDelivery> {
    try {
      const response = await ApiDelivery.put<ResponseApiDelivery>(
        '/users/updateWithoutImage',
        user
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log('ERROR: ' + JSON.stringify(e.response?.data));
      const apiError: ResponseApiDelivery = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }
  public async updateWithImage(
    user: User,
    file: ImagePickerAsset
  ): Promise<ResponseApiDelivery> {
    try {
      let data = new FormData();
      data.append('image', {
        // @ts-ignore
        uri: file.uri,
        name: file.uri.split('/').pop()!,
        type: mime.getType(file.uri)!,
      });
      data.append('user', JSON.stringify(user));
      console.log('AuthRepository LINE 60 =>', data);
      const response = await ApiDeliveryForImage.put<ResponseApiDelivery>(
        '/users/update',
        data
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log('ERROR: ' + JSON.stringify(e.response?.data));
      const apiError: ResponseApiDelivery = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }
}
