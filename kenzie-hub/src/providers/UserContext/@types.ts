import { ITech } from '../TechsContext/@types';

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: string;
  updated_at: string;
}

export interface IRegisterFormValues
  extends Omit<IUser, 'created_at' | 'updated_at' | 'id'> {}

export interface ILoginFormValues
  extends Omit<
    IUser,
    | 'id'
    | 'name'
    | 'passwordConfirmation'
    | 'course_module'
    | 'bio'
    | 'contact'
    | 'created_at'
    | 'updated_at'
  > {}

export interface IUserContext {
  userRegister: (formData: IRegisterFormValues) => Promise<void>;
  userLogin: (formData: ILoginFormValues) => Promise<void>;
  userLogout: () => void;
  loading: Boolean;
  user: null | IUser;
  techs: ITech[];
  SetTechs: React.Dispatch<React.SetStateAction<ITech[]>>;
  allowLogin: boolean;
}
