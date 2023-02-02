import { Rol } from './Rol';
export interface User {
  id?: string;
  email: string;
  name: string;
  lastname: string;
  image?: string;
  phone: string;
  password: string;
  session_token?: string;
  roles?: Rol[];
}
