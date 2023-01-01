import { RemoveUserLocalUseCase } from '../../../../Domain/useCases/userLocal/RemoveUserLocal';

export const useProfleInfoViewModel = () => {
  const removeSession = async () => {
    await RemoveUserLocalUseCase();
  };
  return { removeSession };
};
