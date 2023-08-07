import React from 'react';
import ReactDOM from 'react-dom/client';
import { Profile } from 'components/Profile';
import { Statistic } from 'components/Statistic';
import { Friend } from 'components/Friend';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Profile/>
   <Statistic/>
   <Friend/>
  </React.StrictMode>

);
