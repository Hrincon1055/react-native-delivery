import { useUserLocal } from '../../hooks/useUserLocal';

export const useRolesViewModel = () => {
  const { user } = useUserLocal();
  return { user };
};
