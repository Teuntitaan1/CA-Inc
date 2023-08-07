import { useEffect, useState } from 'react';
import './index.css';

export default (props) => {
    
    const [InputValue, setInputValue] = useState("");

    function SendMessage() {
        fetch(props.ChatAddress, {method : "POST", body : JSON.stringify({Message : InputValue})});
    }

    return(
        <div>
            <input value={InputValue} onChange={(event) => {setInputValue(event.target.value)}}></input>
            <button onClick={() => {SendMessage()}}>Send message</button>
        </div>
    )
};

