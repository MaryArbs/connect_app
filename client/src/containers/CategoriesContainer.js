import React, { Component } from 'react';
import Categories from '../components/Categories/Categories';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/index';
import { Container } from 'semantic-ui-react'

class CategoriesContainer extends Component {

    componentDidMount(){
        console.log("component did mount")
        this.props.fetchCategories()
    };

    render() {
        return (
            <Container>
               <Categories categories={this.props.categories }/>
            </Container>
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

