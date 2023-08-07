import { GlobalStyle } from "./GlobalStyle";
import {TransactionContainer} from "./TransactionContainer";
import transactionData from "../transactions.json";

export const TransactionHistory = () => {
    return <div>
        <TransactionContainer items = {transactionData}/>
        <GlobalStyle/>
    </div>
}