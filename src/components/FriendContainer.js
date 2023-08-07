import { StatusCircle, FriendList, FriendListItem, FriendName} from "./componentstyle/FriendStyle";
export const FriendContainer = props => {
   return (
    <FriendList>
        {props.friends.map(friend => (
        <FriendListItem key={friend.id}>
        <StatusCircle isOnline={friend.isOnline}/>
  <img src={friend.avatar} alt="User avatar" width="48" />
  <FriendName>{friend.name}</FriendName>
        </FriendListItem>
           ))}
    </FriendList>
     
   );

};