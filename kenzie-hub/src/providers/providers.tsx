import { IDefaultProviderProps } from './UserContext/@types';
import { UserProvider } from './UserContext/UserContext';

const Providers = ({ children }: IDefaultProviderProps) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Providers;
