import { Profile } from "./Profile";
import  user from "../data/user.json";
import { GlobalStyle } from "./GlobalStyle";
import friends from "../data/friends.json";
import {TransactionHistory} from "./TransactionHistory";
import {Friend} from "./Friend";
import transactions from "../data/transactions.json";
import { Statistic } from "./Statistic";
import data from "../data/data.json";

export const App = () => {
    return (
        <>
 <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
 <Statistic title="Upload stats" stats={data} /> 
<Friend friends={friends} />

<TransactionHistory items={transactions} /> 
<GlobalStyle/>
        </>
        
    )
}
