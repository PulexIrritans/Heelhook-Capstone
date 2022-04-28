import styled from 'styled-components';
import { ReactComponent as Map } from '../icons/map.svg';
import { ReactComponent as Heart } from '../icons/heart.svg';
import boulderstart from '../images/Boulder-start.jpg';

const BoulderCard = ({
  id,
  name,
  sector,
  level,
  handle_color,
  likes,
  img_start,
}) => {
  return (
    <Wrapper>
      <Pic src={boulderstart}></Pic>
      <ID>#{id}</ID>
      <Name>{name}</Name>
      <Likes>
        <Heart style={{ width: '20px' }} />
        {likes}
      </Likes>
      <Level>Level: {level}</Level>
      <Handle>Handle: {handle_color}</Handle>
      <SectorIcon>
        <Map style={{ width: '20px' }} />
      </SectorIcon>
      <Sector>{sector}</Sector>
      <Button>Climb</Button>
    </Wrapper>
  );
};

export default BoulderCard;

const Wrapper = styled.li`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1.5rem);
  background-color: var(--color-light-gray);
  /* border-radius: 5px; */
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 0.2rem;
  margin: 0.2rem 0;
  &:hover {
    background-color: var(--color-medium-gray);
  }
`;

const Pic = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 100%;
  grid-column: 1/2;
  grid-row: 1/3;
`;
const ID = styled.p`
  grid-column: 2/3;
  grid-row: 1/2;
`;

const Name = styled.h2`
  grid-column: 3/5;
  grid-row: 1/2;
  font-size: 1rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const Likes = styled.p`
  grid-column: 1/2;
  grid-row: 3/4;
`;
const Level = styled.p`
  grid-column: 2/3;
  grid-row: 2/3;
`;
const Handle = styled.p`
  grid-column: 3/5;
  grid-row: 2/3;
`;
const SectorIcon = styled.div`
  grid-column: 2/3;
  grid-row: 3/4;
`;

const Sector = styled.p`
  grid-column: 3/5;
  grid-row: 3/4;
`;
const Button = styled.button`
  font-size: inherit;
  grid-column: 5/5;
  grid-row: 1/4;
`;
