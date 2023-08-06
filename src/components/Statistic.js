import { StatisticContainer } from "./StatisticContainer";
import StatisticContent from "../data.json";
import { GlobalStyle } from "./GlobalStyle";

export const Statistic = () => {
    return <div>
        <GlobalStyle/>
        <StatisticContainer data ={StatisticContent}/>
    </div>
}