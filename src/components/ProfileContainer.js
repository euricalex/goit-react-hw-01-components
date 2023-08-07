import { Container, Description, Avatar, Tag, Location, StatsList, StatItem, StatLabel } from "./componentstyle/Profilestyle";

export const ProfileContainer = props => {
    // console.log(props.items); // Цей рядок виводить елементи props в консоль (для налагодження).

    return (
        <Container>
            {props.items.map(item => (
                <>
                <Avatar src={item.avatar}  alt="User avatar" />
                <Description>{item.username}</Description>
                <Tag>@{item.tag}</Tag>
                <Location>{item.location}</Location>
                <StatsList key = {item.id}>
                    <StatItem>Followers<StatLabel>{item.stats.followers}</StatLabel></StatItem>
                    <StatItem>Views<StatLabel>{item.stats.views}</StatLabel></StatItem>
                    <StatItem>Likes<StatLabel>{item.stats.likes}</StatLabel></StatItem>
                </StatsList>
                </>
            ))}
        </Container>
    );
};
