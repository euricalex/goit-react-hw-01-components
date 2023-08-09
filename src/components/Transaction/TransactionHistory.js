import { GlobalStyle } from "../Profile/GlobalStyle";
import {TransactionContainer} from "./TransactionContainer";
import transactionData from "../data/transactions.json";

export const TransactionHistory = () => {
    return <div>
        <TransactionContainer items = {transactionData}/>
        <GlobalStyle/>
    </div>
}