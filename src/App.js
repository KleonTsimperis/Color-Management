import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import Header from './containers/Header';
import Main from './components/Main';

class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default connect()(App);
