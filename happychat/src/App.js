import React, { Component } from 'react';
import './styles/styles.css';

import { Sidebar }from './containers/Sidebar.js';
import { MessageList }from './containers/MessageList.js';
import { NewMessage }from './containers/NewMessage.js';

class App extends Component {
  render() {
    return (
      <div id="container">
          <section id="main">
              <MessageList />

              <NewMessage />
          </section>

          <Sidebar/>
      </div>
    );
  }
}

export default App;
