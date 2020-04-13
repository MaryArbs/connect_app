import React from 'react';
import { Container } from 'semantic-ui-react';



const Category = props => {
    return (
        <Container>
            {props.category.name}
        </Container>
        
    )
}


export default Category
