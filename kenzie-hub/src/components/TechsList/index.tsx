import { useContext } from 'react';
import { UserContext } from '../../providers/UserContext/UserContext';
import { Ul } from '../../styles/styles';
import { TechsCard } from './TechsCard';

export const TechsList = () => {
  const { techs } = useContext(UserContext);

  return (
    <>
      {techs.length == 0 ? (
        <p>Nenhuma tecnologia adicíonada.</p>
      ) : (
        <Ul>
          {techs.map((tech) => (
            <TechsCard key={tech.id} tech={tech} />
          ))}
        </Ul>
      )}
    </>
  );
};
