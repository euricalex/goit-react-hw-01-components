import React from 'react';
import ReactDOM from 'react-dom/client';
import { Profile } from 'components/Profile/Profile';
import { Statistic } from 'components/Statistic/Statistic';
import { Friend } from 'components/Friend/Friend';
import { TransactionHistory } from "./components/Transaction/TransactionHistory";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Profile/>
   <Statistic/>
   <Friend/>
   <TransactionHistory/>
  </React.StrictMode>

);
