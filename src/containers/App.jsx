import React, { Component } from 'react';
import Header from '../components/Header';
import Mision from '../components/Mision';
import Clients from '../components/Clients';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Mision />
        <Clients />
      </>
    );
  }
}

export default App;
