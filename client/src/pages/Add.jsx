import BoulderCard from '../components/BoulderCard';
import { useParams, Link } from 'react-router-dom';

const Add = ({bouldersList}) => {
    const { id } = useParams()
    const currentBoulder = bouldersList.find(boulder => boulder.number === Number(id));
  return (
    <>
      <Link to={`/`}>Back to Boulder List</Link>
      {currentBoulder ? (
        <BoulderCard
          id={currentBoulder.number}
          name={currentBoulder.name}
          sector={currentBoulder.sector}
          level={currentBoulder.level}
          hold_color={currentBoulder.hold_color}
          img_start={currentBoulder.img_start}
          likes={currentBoulder.number_of_likes}
          setter={currentBoulder.setter}
          tags={currentBoulder.tags}
          weighting={currentBoulder.weighting}
          detailedMode={true}
        />
        ) : (''
        )}
    </>
  );
};

export default Add;
