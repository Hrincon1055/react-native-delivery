import { User } from '../entities/User';
import { ResponseApiDelivery } from '../../Data/sources/remote/models/ResponseApiDelivery';

export interface AuthRepository {
  register(user: User): Promise<ResponseApiDelivery>;
}
