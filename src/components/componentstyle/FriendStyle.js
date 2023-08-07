import styled from 'styled-components';

export const FriendList = styled.ul`
`;
export const StatusCircle = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;