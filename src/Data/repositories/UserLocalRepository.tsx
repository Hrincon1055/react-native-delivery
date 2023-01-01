import { UserLoacalRepository } from '../../Domain/repositories/UserLoacalRepository';
import { User } from '../../Domain/entities/User';
import { LocalStorage } from '../sources/local/LocalStorage';

export class UserLocalRepositoryImpl implements UserLoacalRepository {
  public async save(user: User): Promise<void> {
    const { save } = LocalStorage();
    await save('user', JSON.stringify(user));
  }
  public async getUser(): Promise<User> {
    const { getItem } = LocalStorage();
    const data = await getItem('user');
    const user: User = JSON.parse(data as any);
    return user;
  }
  public async remove(): Promise<void> {
    const { remove } = LocalStorage();
    await remove('user');
  }
}
