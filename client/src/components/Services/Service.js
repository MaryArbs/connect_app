import React from 'react';
import { Container } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';
import './serviceCard.css';


const Service = props => {
    return (
        // <div className="grid-container">
        <Container>
       <Card className="service_card">
       <div key={props.service.id}>
        <Card.Content>
           <Card.Header className="card_header">{props.service.name}</Card.Header><br />
           <Card.Description className="card_description"> {props.service.location}</Card.Description><br />
           <Card.Description className="card_description"> {props.service.phone_number}</Card.Description><br />
           <a target='_blank' href={props.service.url}>Website</a>
        </Card.Content>
        </div>
        </Card>
        </Container>
        // </div>
     )
}


export default Service
