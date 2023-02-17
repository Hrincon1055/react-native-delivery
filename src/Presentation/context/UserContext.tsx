import { ReactNode, createContext, useState, useEffect } from 'react';
import { User } from '../../Domain/entities/User';
import { SaveUserLocalUseCase } from '../../Domain/useCases/userLocal/SaveUserLocal';
import { GetUserLocalUseCase } from '../../Domain/useCases/userLocal/GetUserLocal';
import { RemoveUserLocalUseCase } from '../../Domain/useCases/userLocal/RemoveUserLocal';
import { LocalStorage } from '../../Data/sources/local/LocalStorage';

export const userInitialState: User = {
  id: '',
  email: '',
  name: '',
  lastname: '',
  image: '',
  phone: '',
  password: '',
  session_token: '',
  roles: [],
};

export interface UserContextProps {
  user: User;
  saveUserSession: (user: User) => Promise<void>;
  getUserSession: () => Promise<void>;
  removeUserSession: () => Promise<void>;
}
export const UserContext = createContext({} as UserContextProps);
export const UserProvider = ({ children }: { children: ReactNode }) => {
  // STATE
  const [user, setUser] = useState<User>(userInitialState);
  // EFFECT
  useEffect(() => {
    getUserSession();
  }, []);

  // FUNCIONES
  const saveUserSession = async (user: User): Promise<void> => {
    await SaveUserLocalUseCase(user);
    setUser(user);
  };
  const getUserSession = async (): Promise<void> => {
    const user = await GetUserLocalUseCase();
    setUser(user);
  };
  const removeUserSession = async (): Promise<void> => {
    await RemoveUserLocalUseCase();
    setUser(userInitialState);
  };
  // RETURN
  return (
    <UserContext.Provider
      value={{
        user: { ...user },
        saveUserSession,
        getUserSession,
        removeUserSession,
      }}>
      {children}
    </UserContext.Provider>
  );
};
