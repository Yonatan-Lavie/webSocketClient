import React, { useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const client = new W3CWebSocket('ws://127.0.0.1:8000');

const App = () => {
  useEffect(() => {
    client.onopen = () => {
      console.log('webSocket client Connected');
    };
    return () => {};
  }, []);

  return <div>Testing this app!</div>;
};

export default App;
