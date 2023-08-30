import io from 'socket.io-client';

const backendURL = process.env.REACT_APP_BACKEND_URL;

const createSocket = (onNewImage, removeImage) => {
  const socket = io(backendURL, {
    transports: ['websocket', 'polling'],
  });

  socket.on('connect', () => {
    console.log('Socket connected:', socket.id);
  });

  socket.on('disconnect', () => {
    console.log('Socket disconnected');
  });

  socket.on('connect_error', (error) => {
    console.log(`Socket connection error: ${error}`);
  });

  socket.on('newImage', (imageUrl) => {
    onNewImage(imageUrl);
    console.log('Received new image URL:', imageUrl);
  });

  socket.on('imageRemoved', (imageUrl) => {
    removeImage(imageUrl);
    console.log('Remove image URL:', imageUrl);
  });

  return socket;
};

export default createSocket;
