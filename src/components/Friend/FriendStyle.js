import styled from 'styled-components';

export const FriendList = styled.ul`

margin-top: 70px;
margin-bottom: 70px;
justify-content: center;


`;
export const StatusCircle = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: block;

  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
export const FriendListItem = styled.li`
display: flex;
gap: 20px;
padding: 10px;
box-shadow: 2px 6px 33px -9px rgba(0,0,0,0.75);
margin: 0 auto;
margin-bottom: 30px;
width: 400px;
// justify-content: center;
align-items: center;`;
export const FriendName = styled.p`
font-size: 16px;
font-weight: bold;
color: #333;`;
