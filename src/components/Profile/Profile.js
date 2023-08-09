import { ProfileContainer } from "./ProfileContainer";
import  user from "../data/user.json";
import { GlobalStyle } from "./GlobalStyle";

export const Profile = () => {
    return <div>
        <ProfileContainer users={user}/>
        <GlobalStyle/>
    </div>
}