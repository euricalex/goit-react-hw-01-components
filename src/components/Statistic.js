import { StatisticContainer } from "./StatisticContainer";
import StatisticContent from "../user.json";
import { GlobalStyle } from "./GlobalStyle";

export const Statistic = () => {
    return <div>
        <GlobalStyle/>
        <StatisticContainer users ={StatisticContent}/>
    </div>
}