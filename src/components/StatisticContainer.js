import { StatisticHeader, StatisticItem, StatisticList, StatisticSection } from "./componentstyle/Statisticstyle";
const colors = ['blue', 'purple', 'red', 'green', 'brown']
export const StatisticContainer = props => {
console.log(props.data)
return (
  <StatisticSection>
  <StatisticHeader>Upload stats</StatisticHeader>
     
  

  <StatisticList>
  {props.data.map((item, index) => (
    <StatisticItem  key={item.id} style={{ backgroundColor: colors[index % colors.length] }}>
      <span>{item.label}</span>
      <span>{item.percentage}</span>
    </StatisticItem>
        ))}
  </StatisticList>

    
        </StatisticSection>
);
  };