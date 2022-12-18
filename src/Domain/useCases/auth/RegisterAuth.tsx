import { AuthRepositoryImpl } from '../../../Data/repositories/AuthRepository';
import { User } from '../../entities/User';
import { ResponseApiDelivery } from '../../../Data/sources/remote/models/ResponseApiDelivery';
const { register } = new AuthRepositoryImpl();
export const RegisterAuthUseCase = async (
  user: User
): Promise<ResponseApiDelivery> => {
  return await register(user);
};
