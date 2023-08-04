import { ProfileContainer } from "./ProfileContainer";
import  profileContent from "../user.json";
import { GlobalStyle } from "./GlobalStyle";

export const Profile = () => {
    return <div>
        <ProfileContainer items={profileContent}/>
        <GlobalStyle/>
    </div>
}