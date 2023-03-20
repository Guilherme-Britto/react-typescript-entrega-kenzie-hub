import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../../services/Api';
import { UserContext } from '../UserContext/UserContext';
import { toast } from 'react-toastify';
import { IDefaultProviderProps } from '../UserContext/@types';
import {
  ITechContext,
  ICreateTechFormValues,
  IUpdateTechFormValues,
  ITech,
} from './@types';

export const TechsContext = createContext({} as ITechContext);

export const TechsProvider = ({ children }: IDefaultProviderProps) => {
  const { techs, SetTechs } = useContext(UserContext);
  const [updaingTech, SetUpdatingTech] = useState<ITech | null>(null);
  const [updaingTechModal, SetUpdatingTechModal] = useState(false);
  const [creatingTechModal, SetCreatingTechModal] = useState(false);

  const techsCreate = async (formData: ICreateTechFormValues) => {
    const token = localStorage.getItem('@KENZIEHUB:token');

    try {
      const response = await api.post('/users/techs', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Tecnologia adicionada com sucesso!');
      SetCreatingTechModal(false);
      SetTechs([...techs, response.data]);
    } catch (error) {
      toast.error('Tecnologia já cadastrada!');
    } finally {
    }
  };

  const techsRemove = async (techId: string | undefined) => {
    try {
      const token = localStorage.getItem('@KENZIEHUB:token');
      const response = await api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.info('Tecnologia removida com sucesso!');

      const newTechs = techs.filter((tech) => tech.id !== techId);
      SetTechs(newTechs);
    } catch (error) {}
  };

  const techsUpdate = async (
    formData: IUpdateTechFormValues,
    techId: string | undefined
  ) => {
    try {
      const token = localStorage.getItem('@KENZIEHUB:token');
      const response = await api.put(`/users/techs/${techId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newTechs = techs.map((tech) => {
        if (techId === tech.id) {
          return { ...tech, ...formData };
        } else {
          return tech;
        }
      });
      toast.success('Tecnologia atualizada com sucesso!');
      SetUpdatingTechModal(false);
      SetTechs(newTechs);
    } catch (error) {}
  };

  return (
    <TechsContext.Provider
      value={{
        techsCreate,
        techsRemove,
        techsUpdate,
        updaingTech,
        SetUpdatingTech,
        updaingTechModal,
        SetUpdatingTechModal,
        creatingTechModal,
        SetCreatingTechModal,
      }}
    >
      {children}
    </TechsContext.Provider>
  );
};
