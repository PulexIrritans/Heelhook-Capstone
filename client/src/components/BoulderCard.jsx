import styled from 'styled-components';
import { ReactComponent as Map } from '../icons/map.svg';
import { ReactComponent as Heart } from '../icons/heart.svg';
import boulderstart from '../images/Boulder-start.jpg';

const BoulderCard = ({id, name, sector, level, handle_color, likes, img_start}) => {

    return (
        <CardLi>
            <BoulderPic src={boulderstart}></BoulderPic> 
            <BoulderID>#{id}</BoulderID>
            <BoulderName>{name}</BoulderName>
            <BoulderLikes><Heart style={{width: '20px'}}/>{likes}</BoulderLikes>
            <BoulderLevel>Level: {level}</BoulderLevel> 
            <BoulderHandle>Handle: {handle_color}</BoulderHandle>  
            <BoulderSectorIcon><Map style={{width: '20px'}}/></BoulderSectorIcon>
            <BoulderSector>{sector}</BoulderSector>
            <BoulderButton>Climb</BoulderButton>
        </CardLi>
    )
}

export default BoulderCard;

const CardLi = styled.li`
display: grid;
gap: 5px;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(3, 1.5rem);
background-color: rgb(248, 249, 250);
border-radius: 5px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
padding: 0.2rem;
margin: 0.2rem 0;
&:hover{
    background-color: rgb(241, 243, 245)
}`

const BoulderPic = styled.img`
 object-fit: cover;
  width: 100%;
  max-height: 100%;
grid-column: 1/2;
grid-row: 1/3;
`
const BoulderID = styled.p`
grid-column: 2/3;
grid-row: 1/2;
`

const BoulderName = styled.h2`
grid-column: 3/5;
grid-row: 1/2;
font-size: 1rem;
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
`
const BoulderLikes = styled.p`
grid-column: 1/2;
grid-row: 3/4;
`
const BoulderLevel = styled.p`
grid-column: 2/3;
grid-row: 2/3;
`
const BoulderHandle = styled.p`
grid-column: 3/5;
grid-row: 2/3;
`
const BoulderSectorIcon = styled.div`
grid-column: 2/3;
grid-row: 3/4;
`

const BoulderSector = styled.p`
grid-column: 3/5;
grid-row: 3/4;
`
const BoulderButton = styled.button`
font-size: inherit;
grid-column: 5/5;
grid-row: 1/4;
`