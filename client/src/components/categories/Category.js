import React from 'react';
import { Container } from 'semantic-ui-react';
import { Card, Image} from 'semantic-ui-react';
import './categoryCard.css';
import  CategoryShowPage from './CategoryShowPage'
import {NavLink} from 'react-router-dom'



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
        <NavLink
          to={`/categories/${props.category.id}`}>
             <button>
                Learn More!
             </button>
        </NavLink>
        </div>
        </Card>
        </Container>
     )
}





export default Category
