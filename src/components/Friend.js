import { FriendContainer } from "./FriendContainer";
import friendContent from "../friends.json";
import { GlobalStyle } from "./GlobalStyle";

export const Friend = () => {
    return <div>
        <FriendContainer friends ={friendContent}/>
        <GlobalStyle/>
    </div>
}