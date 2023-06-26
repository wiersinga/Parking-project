import { useState } from "react";
import { AppService } from "../services/app.services";
import Card from 'react-bootstrap/Card';

const GetTicket = () => {

    const [newPlaceNum, setNewPlaceNum] = useState('');

    const buttonHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
        var result = await getTicket();
        setNewPlaceNum(result);

        var ticketText = document.getElementById('ticket');

        if (ticketText != null && ticketText.style.display === 'none') {
            ticketText.style.display = 'block';
        }

        console.log(result);

    };

    const getTicket = async () => {
        const service = new AppService();
        const response = await service.GetTicket();
        console.log(response);
        return response;
    }

    return (
        <div className="get-container border border-5 rounded-top">
            <div className="title-container border-bottom border-5 rounded-top ">
                <h1>Welcome to the "Parking de la ville"</h1>
            </div>
            <div className="ticket-container">
                <h4>Press the button to have your ticket  :  </h4>              
                <button onClick={buttonHandler} className="btn btn-primary">Ticket</button>
            </div>
            <div>
            <Card id="ticket" style={{ display: "none", width: '18rem' }}>
                <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/005/720/226/original/blue-parking-sign-illustration-isolated-on-white-background-free-vector.jpg" />
                <Card.Text>
                    <span style={{fontWeight:"bolder"}}>Le numéro de votre place est : </span>
                    <span style={{fontWeight:"bolder"}}> {newPlaceNum} </span>
                </Card.Text>
                <Card.Body>
                    <Card.Title>Parking de la ville</Card.Title>
                    <Card.Text>
                        En cas de perte de votre ticket,contacter le centre de contröle à l'adresse Suivante: <br />
                        Les Papeteries Cran-Gevrier 74960
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>

         
        </div>
    )
};

export default GetTicket;
