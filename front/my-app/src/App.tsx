import React,{useState} from 'react';
import './App.css';
import GetTicket from './components/entry';
import ReturnTicket from './components/exit';
import GetStatus from './components/status';
import ShowTicket from './components/ticket';

function App() {

  return  <div className="container justify-content">
           <GetTicket />
           <ReturnTicket />
                               
          </div>
};

export default App;
