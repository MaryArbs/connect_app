// import React from 'react';
// import { Container } from 'semantic-ui-react';
// import { Card } from 'semantic-ui-react';
// import './serviceCard.css';




// const Service = props => {
//     return (
//         // <div className="grid-container">
//         <Container>
//        <Card className="service_card">
//        <div key={props.service.id}>
//         <Card.Content>
//            <Card.Header className="card_header">{props.service.name}</Card.Header><br />
//            <Card.Description className="card_description"> {props.service.location}</Card.Description><br />
//            <Card.Description className="card_description"> {props.service.phone_number}</Card.Description><br />
//            <a target='_blank' href={props.service.url}>Website</a>
//         </Card.Content>
//         </div>
//         </Card>
//         </Container>
//         // </div>
//      )
// }


// export default Service

import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';
import './serviceCard.css';

class Service extends Component {

    state = {
    likes: 0
  }

    updateLikes = () => {
      let currentState = this.state.likes

      this.setState({
        likes: currentState + 1
    })
  }

    renderServiceCard = (props) => {
        return (
            // <div className="grid-container">
            <Container>
           <Card className="service_card">
           <div key={this.props.service.id}>
            <Card.Content>
               <Card.Header className="card_header">{this.props.service.name}</Card.Header><br />
               <Card.Description className="card_description"> {this.props.service.location}</Card.Description><br />
               <Card.Description className="card_description"> {this.props.service.phone_number}</Card.Description><br />
               <a target='_blank' href={this.props.service.url}>Website</a><br /><br />
               <button onClick={this.updateLikes}> Likes: {this.state.likes} </button><br /><br />
            </Card.Content>
            </div>
            </Card>
            </Container>
        )
    }
   
   
    render = () => {
    return (
   
     <div>
     {this.renderServiceCard()}
     </div>
     )
    };
}

export default Service