import { User } from '../entities/User';

export interface UserLoacalRepository {
  save(user: User): Promise<void>;
  getUser(): Promise<User>;
  remove(): Promise<void>;
}
