import React from 'react';
import { Container } from 'semantic-ui-react';
import { Card, Image} from 'semantic-ui-react';
import './categoryCard.css';



const Category = props => {
    return (
        <Container>
       <Card className="category_card">
       <div key={props.category.id}>
        <Card.Content>
           <Card.Header className="card_header">{props.category.name}</Card.Header><br />
           <Card.Description className="card_description"> {props.category.description}</Card.Description><br />
           <Image className='category_image' src={props.category.image} /><br />
        </Card.Content>
         <button className="category_button" onClick={() =>  window.location.href='/categories/:categoryId'}>
          <div className="visible content">Learn More</div>
        </button>
        </div>
        </Card>
        </Container>
     )
}


export default Category
