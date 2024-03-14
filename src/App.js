import React, { Component } from 'react'
import Bio from './Components/Bio';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {show:false};
  }

toggle=()=>{
  this.setState({show: !this.state.show})
}
render() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <h3>jihed profile</h3>
        <button onClick={this.toggle}>its me </button>
        {this.state.show ? <Bio /> : null}
      </div>
    </div>
  );
}

};