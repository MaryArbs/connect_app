import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/index';
// import { Container } from 'semantic-ui-react'

class CategoriesContainer extends Component {

    // componentDidMount() {
    //       fetch('http://localhost:3000/categories')
    //       .then(response => response.json())
    //       .then(data => console.log(data))
    //     };
    //     //need to move to actions, but it is fetching!

    componentDidMount(){
        console.log("component did mount")
        this.props.fetchCategories()
    };

    render() {
        return (
            <h1>Categories</h1>
        )
    }
};
  

    const mapStateToProps = (state) => {
        console.log(state)
        return {
            categories: state.categoriesReducer.categories,
            loading: state.categoriesReducer.loading
        }
    };



    
    
export default connect(mapStateToProps, {fetchCategories})(CategoriesContainer);

