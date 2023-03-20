export interface ITech {
  id: string;
  title: string;
  status: string | undefined;
  user: string;
  created_at: string;
  updated_at: string;
}

export type ICreateTechFormValues = Omit<
  ITech,
  'id' | 'user' | 'created_at' | 'updated_at'
>;

export type IUpdateTechFormValues = Omit<
  ITech,
  'id' | 'title' | 'user' | 'created_at' | 'updated_at'
>;

export interface ITechContext {
  techsCreate: (formData: ICreateTechFormValues) => Promise<void>;
  techsRemove: (techId: string | undefined) => Promise<void>;
  techsUpdate: (
    formData: IUpdateTechFormValues,
    techId: string | undefined
  ) => Promise<void>;
  updaingTech: null | ITech;
  SetUpdatingTech: React.Dispatch<React.SetStateAction<null | ITech>>;
  creatingTechModal: boolean;
  SetCreatingTechModal: React.Dispatch<React.SetStateAction<boolean>>;
  updaingTechModal: boolean;
  SetUpdatingTechModal: React.Dispatch<React.SetStateAction<boolean>>;
}
