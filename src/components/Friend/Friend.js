import { FriendContainer } from "./FriendContainer";
import friendContent from "../data/friends.json";
import { GlobalStyle } from "../Profile/GlobalStyle";

export const Friend = () => {
    return <div>
        <FriendContainer friends ={friendContent}/>
        <GlobalStyle/>
    </div>
}