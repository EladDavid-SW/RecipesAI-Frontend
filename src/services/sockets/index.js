import { useState, useEffect } from 'react';
import io from 'socket.io-client';

function useWebSocket(url, onNewImageUrl) {
  const [socket, setSocket] = useState(null);
  const [socketConnected, setSocketConnected] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const newSocket = io(url, {
      transports: ['websocket', 'polling'],
    });
    setSocket(newSocket);

    newSocket.on('connect', () => {
      console.log('Socket connected');
      
      if (onNewImageUrl) {
        newSocket.on('newImage', (imageUrl) => {
          console.log('Received new image URL:', imageUrl);
          onNewImageUrl(imageUrl);
        });
      }
      
      setSocketConnected(true);
    });

    newSocket.on('disconnect', () => {
      console.log('Socket disconnected');
      setSocketConnected(false);
    });

    return () => newSocket.close();
  }, [url]);

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on('newImage', (imageUrl) => {
      console.log('Received new image URL:', imageUrl);
      if (onNewImageUrl) {
        onNewImageUrl(imageUrl);
      }
    });

    return () => {
      socket.off('message');
      socket.off('newImage');
    };
  }, [socket, onNewImageUrl]);

  function sendMessage(message) {
    if (socketConnected) {
      socket.emit('message', message);
    }
  }

  return [messages, sendMessage];
}

export default useWebSocket;
