import { useEffect, useState } from 'react';
import './index.css';

import Message_Box from './Components/Message_Box/Message_Box';
import Chat_Box from './Components/Chat_Box/Chat_Box';

export default (props) => {

    return (
      <>
        <Chat_Box ChatAddress={props.ChatAddress}></Chat_Box>
        <Message_Box ChatAddress={props.ChatAddress}></Message_Box>
      </>
    )
};
