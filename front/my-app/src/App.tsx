import React,{useState} from 'react';
import './App.css';
import GetTicket from './components/entry';
import ReturnTicket from './components/exit';
//import GetStatus from './components/status';

function App() {

  const ticketnavHandler = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    
    var ticket = document.getElementById('ticket-elmt');
    var exit = document.getElementById('exit-elmt');
    var status = document.getElementById('status-elmt');

    if (ticket != null && exit != null && status != null) {
        ticket.style.display = 'block';
        exit.style.display = 'none';
        status.style.display = 'none';
    } 
  };

  const exitnavHandler = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    
    var ticket = document.getElementById('ticket-elmt');
    var exit = document.getElementById('exit-elmt');
    var status = document.getElementById('status-elmt');

    if (ticket != null && exit != null && status != null) {
      ticket.style.display = 'none';
      exit.style.display = 'block';
      status.style.display = 'none';
    }
  };

  const statusnavHandler = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    
    var ticket = document.getElementById('ticket-elmt');
    var exit = document.getElementById('exit-elmt');
    var status = document.getElementById('status-elmt');

    if (ticket != null && exit != null && status != null) {
      ticket.style.display = 'none';
      exit.style.display = 'none';
      status.style.display = 'block';
    }
  };

  return (
    <div> 
      <ul>
        <li><a className="active" href="#" onClick={ticketnavHandler}>Get Ticket</a></li>
        <li><a href="#" onClick={exitnavHandler}>Exit Parking</a></li>
        <li><a href="#" onClick={statusnavHandler}>Show Parking Status</a></li>    
      </ul> 
      
      <div className="container justify-content">
            <div id='ticket-elmt' ><GetTicket /></div>  
            <div id='exit-elmt' style={{"display":"none"}}><ReturnTicket /></div>
            <div id='status-elmt' style={{"display":"none"}}>{/* // <GetStatus/>  */}</div>              
      </div>   
  </div>
)};

export default App;
