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
        //    <Container className="service-card-container">
           <div className="service-card-container" key={this.props.service.id}>
            <div className="service-card-content">
               <div className="service_card_header">{this.props.service.name}</div><br />
               <div className="service_card_location"> {this.props.service.location}</div><br />
               <div className="service_card_phone_number"> {this.props.service.phone_number}</div><br />
               <a target='_blank' href={this.props.service.url}>Website</a><br /><br />
               <button class="ui button" onClick={this.updateLikes}> Likes: {this.props.service.likes} </button>
            </div>
            </div>
            // </Container>
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

