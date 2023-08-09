import { StatisticHeader, StatisticItem, StatisticList, StatisticSection } from "./Statisticstyle";
const colors = ['blue', 'purple', 'red', 'green', 'brown']

export const StatisticContainer = ({ title, stats }) => {
  return (
    <StatisticSection>
      {title && <StatisticHeader>{title}</StatisticHeader>}
      
      <StatisticList>
        {stats.map((state, index) => (
          <StatisticItem key={state.id} style={{ backgroundColor: colors[index % colors.length] }}>
            <span>{state.label}</span>
            <span>{state.percentage}</span>
          </StatisticItem>
        ))}
      </StatisticList>
    </StatisticSection>
  );
};
