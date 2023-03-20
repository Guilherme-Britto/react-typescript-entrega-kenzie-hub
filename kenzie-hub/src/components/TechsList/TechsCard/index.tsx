import { useContext } from 'react';
import { ITech } from '../../../providers/TechsContext/@types';
import { TechsContext } from '../../../providers/TechsContext/TechsContext';

interface ITechsCardProps {
  tech: ITech;
}

export const TechsCard = ({ tech }: ITechsCardProps) => {
  const { SetUpdatingTech, SetUpdatingTechModal, SetCreatingTechModal } =
    useContext(TechsContext);

  return (
    <li
      onClick={() => (
        SetUpdatingTech(tech),
        SetUpdatingTechModal(true),
        SetCreatingTechModal(false)
      )}
    >
      <h3>{tech.title}</h3>
      <p className='colorgrey1'>{tech.status}</p>
    </li>
  );
};
