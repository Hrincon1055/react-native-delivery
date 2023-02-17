import { useContext } from 'react';
import { RemoveUserLocalUseCase } from '../../../../Domain/useCases/userLocal/RemoveUserLocal';
import { UserContext } from '../../../context/UserContext';

export const useProfleInfoViewModel = () => {
  const { user, removeUserSession } = useContext(UserContext);
  return { user, removeUserSession };
};
