import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

class App extends Component {
  render() {
    const CUSTOMERS = [
      {
          id : 1,
          name : 'abc',
          addressLine1 : 'xyz',
          addressLine2 : 'pqr',
          age : 12,
          postCode : 124563
       }
  ]
    return (
      <div>
        <Customer cst={CUSTOMERS}/>
        
      </div>
    );
  }
}

export default App;
