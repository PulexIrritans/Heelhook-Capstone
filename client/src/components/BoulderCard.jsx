import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Map } from '../icons/map.svg';
import { ReactComponent as Heart } from '../icons/heart.svg';
import { ReactComponent as SetterIcon } from '../icons/setter.svg';
import { AiOutlineCheck } from 'react-icons/ai';

const BoulderCard = ({ boulder, detailedMode }) => {
  const {
    _id,
    name,
    sector,
    level,
    hold_color,
    tags,
    img_start,
    img_complete,
    setter,
    weighting,
    likeAmount,
    climbed,
  } = boulder;
  const [isInDetailedMode, setIsInDetailedMode] = useState(detailedMode);

  return (
    <>
      {isInDetailedMode ? (
        <WrapperLong>
          <StartPic
            src={require(`../images/${img_start}`)}
            alt="Boulder Start"
          />
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
          <AllPic
            src={require(`../images/${img_complete}`)}
            alt="Boulder Complete"
          ></AllPic>
        </WrapperLong>
      ) : (
        <WrapperShort climbed={climbed}>
          <CardLink
            onClick={() => setIsInDetailedMode(true)}
            to={`/add/${_id}`}
          >
            <StartPic
              src={require(`../images/${img_start}`)}
              alt="Boulder Start"
            />
            <Name>{name}</Name>
            <Likes>
              <Heart style={{ width: '20px' }} />
              {likeAmount}
            </Likes>
            {climbed !== 'None' ? <Climbed>{climbed}</Climbed> : ''}
            {climbed !== 'Zone' &&
            climbed !== 'Touched' &&
            climbed !== 'None' ? (
              <Checked />
            ) : (
              ''
            )}
            <Level>Level: {level}</Level>
            <Hold>Hold: {hold_color}</Hold>
            <SectorIcon>
              <Map style={{ width: '20px' }} />
            </SectorIcon>
            <Sector>{sector}</Sector>
          </CardLink>
        </WrapperShort>
      )}
    </>
  );
};

export default BoulderCard;

const WrapperShort = styled.li`
  background-color: ${props =>
    props.climbed === 'Flash' || props.climbed === 'Top'
      ? 'var(--color-cyan-transparent)'
      : 'var(--color-light-gray)'};
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  &:hover {
    background-color: var(--color-medium-gray);
  }
`;

const WrapperLong = styled.li`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, auto);
  background-color: var(--color-light-gray);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 0.5rem;
  &:hover {
    background-color: var(--color-medium-gray);
  }
`;

const CardLink = styled(Link)`
  text-decoration: none;
  font-size: inherit;
  color: inherit;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, auto);
  padding: 0.5rem;
`;

const Text = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const StartPic = styled.img`
  object-fit: scale-down;
  max-width: 100%;
  max-height: 100%;
  border-radius: 100%;
  grid-column: 1/2;
  grid-row: 1/4;
`;

const Name = styled.h2`
  grid-column: 2/5;
  grid-row: 1/2;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const Likes = styled.p`
  grid-column: 5/6;
  grid-row: 1/2;
  justify-self: end;
`;

const Climbed = styled.p`
  grid-column: 5/6;
  grid-row: 2/3;
  justify-self: end;
`;

const Level = styled.p`
  grid-column: 2/3;
  grid-row: 2/3;
`;
const Hold = styled(Text)`
  grid-column: 3/5;
  grid-row: 2/3;
`;
const SectorIcon = styled.p`
  grid-column: 2/3;
  grid-row: 3/4;
`;

const Sector = styled(Text)`
  grid-column: 3/5;
  grid-row: 3/4;
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

const Setter = styled(Text)`
  grid-column: 1/3;
  grid-row: 4/5;
`;

const Weighting = styled(Text)`
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

const Checked = styled(AiOutlineCheck)`
  justify-self: end;
  grid-column: 5/6;
  grid-row: 3/4;
  width: 20px;
  height: 20px;
`;
