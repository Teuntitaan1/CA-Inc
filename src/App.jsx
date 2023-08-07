import { useEffect, useState } from 'react';
import './App.css';

import ChatPage from './Pages/Chat_Page/Chat_Page';

export default (props) => {

  const [ActivePage, SetActivePage] = useState("Chat_Page");
  const [PreviousPage, SetPreviousPage] = useState("Chat_Page");

  function SwitchActivePage(New_Page) {
    if (New_Page != ActivePage) {
      SetPreviousPage(ActivePage);
      SetActivePage(New_Page);
    }
    
  }
  function GetActivePage() {
    if(ActivePage == "Chat_Page") {
      return <ChatPage ChatAddress={props.ChatAddress}></ChatPage>
    }
    return <ErrorPage></ErrorPage>
  }
  
  return(
    <>
      {GetActivePage()}
    </>
  )
}
