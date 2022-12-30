import { AuthRepositoryImpl } from '../../../Data/repositories/AuthRepository';

import { ResponseApiDelivery } from '../../../Data/sources/remote/models/ResponseApiDelivery';
const { login } = new AuthRepositoryImpl();
export const LoginAuthUseCase = async (
  email: string,
  password: string
): Promise<ResponseApiDelivery> => {
  return await login(email, password);
};
