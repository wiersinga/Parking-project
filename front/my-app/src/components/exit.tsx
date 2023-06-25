import { useState, ChangeEvent} from "react";
import { AppService } from "../services/app.services";


const ReturnTicket = () => {
    const [inputNumber,setInputText] = useState('');
    
    const buttonHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {     
        var num:number = +inputNumber;
        const isValid = await ReturnTicket(num);

        if(isValid)
        {
            var thanksText = document.getElementById('thanksText');
       
            if(thanksText != null &&thanksText.style.display === 'none') {           
                thanksText.style.display = 'block'; 
            } 
        }  else{

            var invalidText = document.getElementById('invalidText');
       
            if(invalidText != null && invalidText.style.display === 'none') {           
                invalidText.style.display = 'block'; 
            } 
        }    
      
    };

    const ReturnTicket = async (id:number)=> {
        const service = new AppService();
        const isValid = await service.ReturnTicket(id);   
        
        return isValid;
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // 👇 Store the input value to local state
        setInputText(e.target.value);
    };

    return <div className="Return-container">
         <div className="exit border border-5 mb-2">
                <span className="input-group-number"> Enter your place number and press Exit </span>
                <input type="number" onChange={handleChange} value={inputNumber} />                
                <button onClick={buttonHandler} type="button" className="btn btn-primary">Exit</button>
                <span id="thanksText" style={{display:"none"}}> Thank you for coming :) See you soon !! </span>
                <span id="invalidText" style={{display:"none"}}> Invalid Ticket !</span>
          </div>
    </div>
};
export default ReturnTicket;