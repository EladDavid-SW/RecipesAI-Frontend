import { useState, useEffect } from 'react';
import io from 'socket.io-client';

function useWebSocket(url) {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const newSocket = io(url);
    setSocket(newSocket);

    return () => newSocket.close();
  }, [url]);

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('message');
    };
  }, [socket]);

  function sendMessage(message) {
    if (socket) {
      socket.emit('message', message);
    }
  }

  return [messages, sendMessage];
}

export default useWebSocket;



// import useWebSocket from './useWebSocket';

// function MyComponent() {
//   const [messages, sendMessage] = useWebSocket('ws://localhost:3001');

//   function handleSendMessage() {
//     sendMessage('Hello, server!');
//   }