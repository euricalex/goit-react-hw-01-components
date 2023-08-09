import { Container, Description, Avatar, Tag, Location, StatsList, StatItem, StatLabel } from "./Profilestyle";

export const ProfileContainer = props => {
    // console.log(props.items); // Цей рядок виводить елементи props в консоль (для налагодження).

    return (
        <Container>
            {props.users.map(user => (
                <>
                <Avatar src={user.avatar}  alt="User avatar" />
                <Description>{user.username}</Description>
                <Tag>@{user.tag}</Tag>
                <Location>{user.location}</Location>
                <StatsList key = {user.id}>
                    <StatItem>Followers<StatLabel>{user.stats.followers}</StatLabel></StatItem>
                    <StatItem>Views<StatLabel>{user.stats.views}</StatLabel></StatItem>
                    <StatItem>Likes<StatLabel>{user.stats.likes}</StatLabel></StatItem>
                </StatsList>
                </>
            ))}
        </Container>
    );
};
