

const ReturnTicket = () => {
    return <div className="Return-container">
         <div className="exit border border-5 mb-2">
                <span className="input-group-number">Enter your place number to exit and press Exit:</span>
                <input type="number"/>
                <button type="button" className="btn btn-primary">Exit</button>
          </div>
    </div>
};
export default ReturnTicket;