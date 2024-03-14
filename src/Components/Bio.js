import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
export default class Bio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      person:{
      fullName: 'jihed Ben Salem',
      bio: 'number: 54580154 ',
      imgSrc: './images/jihed.jpg',
      profession: 'Job: i still learning ',
      },
      show:false,
      timer:0,
      interval:null
    };
  }
            
      
      componentDidMount(){
        this.setState({
          interval : setInterval (
            () => this.setState ({timer : this.state.timer + 1}),1000
          )
        })  
        console.log("componentDidMount") }

        
      componentDidUpdate(){console.log("component mounted")
                            console.log(this.state.bio)}
      
      
    render() {
    return (
      <>
      
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
    <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src={this.state.person.imgSrc} style={{ width: '30%', height: '100%', borderRadius: '50%' }} />
      <Card.Body>
        <Card.Title>{this.state.person.fullName}</Card.Title>
        <Card.Text>
          {this.state.person.bio}<br />
          {this.state.person.profession}
        </Card.Text>
        <p>Timer : {this.state.timer}</p>
      </Card.Body>
    </Card>
  </div>
      </>
    )
  }
}