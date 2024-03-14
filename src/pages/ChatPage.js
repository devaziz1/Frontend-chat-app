import React, { useEffect, useState } from "react";
import axios from "axios";

function ChatPage() {
  // const [chats, setChats] = useState([]);

  // useEffect(() => {
  //   const fetchChats = async () => {
  //     try {
  //       const { data } = await axios.get("/api/chats");
  //       setChats(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Error fetching chats:", error);
  //     }
  //   };

  //   fetchChats();

    
  //   return () => {
      
  //   };
  // }, []); 

  return (
    <div>
      {/* {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))} */}

      Chats page
    </div>
  );
}

export default ChatPage;
