import { useUserLocal } from '../../hooks/useUserLocal';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export const useRolesViewModel = () => {
  const { user } = useContext(UserContext);
  return { user };
};
