import { StatisticContainer } from "./StatisticContainer";
import data from "../data/data.json";
import { GlobalStyle } from "../Profile/GlobalStyle";

export const Statistic = () => {
    return (
        <div>
            <GlobalStyle />
            <StatisticContainer title="Upload stats" stats={data} />
        </div>
    );
}
