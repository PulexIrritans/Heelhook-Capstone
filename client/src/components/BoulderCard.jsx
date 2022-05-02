import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Map } from '../icons/map.svg';
import { ReactComponent as Heart } from '../icons/heart.svg';
import { ReactComponent as SetterIcon } from '../icons/setter.svg';
import boulderall from '../images/Boulder-all.jpg';
import boulderstart from '../images/Boulder-start.jpg';

const BoulderCard = ({ boulder, detailedMode }) => {
  const {
    id,
    name,
    sector,
    level,
    hold_color,
    number_of_likes,
    tags,
    img_start,
    setter,
    weighting,
  } = boulder;
  const [isInDetailedMode, setIsInDetailedMode] = useState(detailedMode);

  return (
    <>
      {isInDetailedMode ? (
        <WrapperLong>
          <StartPic src={boulderstart} alt="Boulder Start" />
          <Name>{name}</Name>
          <Level>Level: {level}</Level>
          <Hold>Hold: {hold_color}</Hold>
          <SectorIcon>
            <Map style={{ width: '20px' }} />
          </SectorIcon>
          <Sector>{sector}</Sector>
          <Setter>
            <SetterIcon style={{ width: '20px' }} /> {setter}
          </Setter>
          <Weighting>Weighting: {weighting}</Weighting>
          <TagList>
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagList>
          <AllPic src={boulderall} alt="Boulder Complete"></AllPic>
        </WrapperLong>
      ) : (
        <WrapperShort
          onClick={() => setIsInDetailedMode(true)}
          to={`/add/${id}`}
        >
          <StartPic src={boulderstart} alt="Boulder Start" />
          <Name>{name}</Name>
          <Likes>
            <Heart style={{ width: '20px' }} />
            {number_of_likes}
          </Likes>
          <Level>Level: {level}</Level>
          <Hold>Hold: {hold_color}</Hold>
          <SectorIcon>
            <Map style={{ width: '20px' }} />
          </SectorIcon>
          <Sector>{sector}</Sector>
        </WrapperShort>
      )}
    </>
  );
};

export default BoulderCard;

const WrapperShort = styled(Link)`
  text-decoration: none;
  font-size: inherit;
  color: inherit;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1.3rem);
  background-color: var(--color-light-gray);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 0.2rem;
  &:hover {
    background-color: var(--color-medium-gray);
  }
`;

const WrapperLong = styled.li`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1.3rem);
  background-color: var(--color-light-gray);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 0.2rem;
  &:hover {
    background-color: var(--color-medium-gray);
  }
`;

const StartPic = styled.img`
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
  border-radius: 100%;
  grid-column: 1/2;
  grid-row: 1/3;
`;

const Name = styled.h2`
  grid-column: 2/5;
  grid-row: 1/2;
  font-size: 1rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const Likes = styled.p`
  grid-column: 5/6;
  grid-row: 1/2;
  justify-self: end;
`;
const Level = styled.p`
  grid-column: 2/3;
  grid-row: 2/3;
`;
const Hold = styled.p`
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
const StyledLink = styled(Link)`
  font-size: inherit;
  color: inherit;
  grid-column: 5/6;
  grid-row: 1/4;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background-color: var(--color-cyan);
`;

const TagList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  grid-column: 1/5;
  grid-row: 5/6;
`;

const Tag = styled.li`
  padding: 0.2em;
  font-size: 0.8rem;
  background-color: var(--color-cyan);
`;

const Setter = styled.p`
  grid-column: 1/3;
  grid-row: 4/5;
`;

const Weighting = styled.p`
  grid-column: 3/5;
  grid-row: 4/5;
`;

const AllPic = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 100%;
  grid-column: 5/6;
  grid-row: 1/6;
`;
