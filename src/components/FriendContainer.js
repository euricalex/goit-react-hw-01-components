import { StatusCircle, FriendList} from "./componentstyle/FriendStyle";
export const FriendContainer = props => {
   return (
    <FriendList>
        {props.friends.map(friend => (
        <li key={friend.id}>
        <StatusCircle isOnline={friend.isOnline}/>
  <img src={friend.avatar} alt="User avatar" width="48" />
  <p>{friend.name}</p>
        </li>
           ))};
    </FriendList>
     
   );

};