import React from 'react';
import './App.css';
import GetTicket from './components/entry';
import ReturnTicket from './components/exit';
import GetStatus from './components/status';



function App() {
  return  <div className="container justify-content">
           <GetTicket />
           <ReturnTicket />
           <GetStatus />
          </div>
};

export default App;
