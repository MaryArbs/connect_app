import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

class CategoriesContainer extends Component {

    componentDidMount() {
          fetch('http://localhost:3000/categories')
          .then(response => response.json())
          .then(data => console.log(data))
        };

    render() {
        return (
            <h1>Categories</h1>
        )
    };

}
    
    
export default CategoriesContainer;
