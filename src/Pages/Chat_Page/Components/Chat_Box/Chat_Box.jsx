import { useEffect, useState } from 'react';
import './index.css';

export default (props) => {
  
  const [ChatContent, SetChatContent] = useState([]);

  async function GetMessages() {
    fetch(props.ChatAddress).then((response) => response.json().then((data) => {SetChatContent(data);}));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      GetMessages();
    }, 1000);
  }, []);

  return(
    <div>
      {ChatContent.length == 0 ? <p>No messages in the chat, be the first!</p> :
        <ul>
          {ChatContent.map((Message, Index) => <li key={Index}>{Message}</li>)}
        </ul>}
    </div>
  )
};

