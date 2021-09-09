import React from 'react'

import { Chat } from './Chat'

import './App.css'
import 'antd/dist/antd.css'

function App() {
  return (
    <div className="app">
      <div className="app__chat">
        <Chat />
      </div>
    </div>
  );
}

export default App;
