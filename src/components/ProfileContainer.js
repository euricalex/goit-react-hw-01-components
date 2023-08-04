import { Container, Description, Avatar, Tag, Location, StatsList, StatItem, StatLabel } from "./Profilestyle/Profilestyle";

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
                <StatsList>
                    <StatItem key={item.id}>Followers<StatLabel>{item.stats.followers}</StatLabel></StatItem>
                    <StatItem key={item.id}>Views<StatLabel>{item.stats.views}</StatLabel></StatItem>
                    <StatItem key={item.id}>Likes<StatLabel>{item.stats.likes}</StatLabel></StatItem>
                </StatsList>
                </>
            ))}
        </Container>
    );
};
