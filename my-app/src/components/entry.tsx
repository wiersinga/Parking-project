

const GetTicket = () => {
    return <div className="get-container  border border-5 mb-2">
        <div className="ticket-container border border">
            <p>Press the button to have your ticket :</p>
            <button type="button" className="btn btn-outline-primary">Ticket</button>
        </div>
        <div className="print-ticket border border-primary mb-5">
              <h3>This is your ticket</h3>
              <h5>Your number place is : </h5>
              <p>If you lose your parking ticket, please go to the parking control center <br/></p>
        </div>     
    </div>
};
export default GetTicket;
