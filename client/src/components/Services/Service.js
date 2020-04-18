import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';
import './serviceCard.css';
import {connect} from 'react-redux'
import { updateLikes } from '../../actions/index.js'

class Service extends Component {

    updateLikes = () => {
        let service = this.props.service
        service.likes += 1
        this.props.updateLikes(service)
  }

    renderServiceCard = (props) => {
        return (
           <Container>
           <Card className="service_card">
           <div key={this.props.service.id}>
            <Card.Content>
               <Card.Header className="card_header">{this.props.service.name}</Card.Header><br />
               <Card.Description className="card_description"> {this.props.service.location}</Card.Description><br />
               <Card.Description className="card_description"> {this.props.service.phone_number}</Card.Description><br />
               <a target='_blank' href={this.props.service.url}>Website</a><br /><br />
               <button class="ui button" onClick={this.updateLikes}> Likes: {this.props.service.likes} </button>
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



export default connect(null,{updateLikes})(Service)

