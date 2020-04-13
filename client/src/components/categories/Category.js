import React from 'react';
import { Container } from 'semantic-ui-react';
import { Card, Image} from 'semantic-ui-react';
import './card.css';



const Category = props => {
    return (
        <Container>
        <Card.Content>
           <Card.Header className="card_header">{props.category.name}</Card.Header><br />
           {/* <Card.Description className="card_description"> {props.category.description}</Card.Description><br /> */}
           <Image className='category_image' src={props.category.image} />
        </Card.Content>
        </Container>
        
        
    )
}


export default Category
