import { RemoveUserLocalUseCase } from '../../../../Domain/useCases/userLocal/RemoveUserLocal';
import { useUserLocal } from '../../../hooks/useUserLocal';

export const useProfleInfoViewModel = () => {
  const { user } = useUserLocal();
  const removeSession = async () => {
    await RemoveUserLocalUseCase();
  };
  return { user, removeSession };
};
