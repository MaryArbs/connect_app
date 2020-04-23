import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CategoriesContainer from '../containers/CategoriesContainer'
import Header from '../components/Header'
import Home from '../components/Home'
import CategoryShowPage from '../components/Categories/CategoryShowPage'
import Footer from '../components/Footer'
import { fetchServices } from '../actions/index';
import { fetchCategories } from '../actions/index';
import About from '../components/About'
import './Main.css'


//this could all go in app..js

class Main extends Component {

    componentDidMount(){
        this.props.fetchCategories();
        this.props.fetchServices()
    };

   
    render() {
        return (
         <div>
         <Header/>
         <Switch>
            <div>
              <Route exact path="/" component={ Home } />
              <Route exact path="/categories" component={ CategoriesContainer } />
              <Route exact path="/about" component={ About } />
              <Route exact path='/categories/:id' component={ ({match}) => <CategoryShowPage id={match.params.id} />}/> 
    
              </div>
         </Switch>
         <Footer />
     </div>
    )};
}
//a prop called match gets passed to every roure that is rendered
//inside match object is a params object
//holds all matching params-the key is the name specified when creating the route (ex; :id), and value is actual value in URL
//id={match.params.id} is reference as this.props.id in CategoryShowPage, where teh matching param to the category 'clickled' will be rendered. 
    
    
    const mapStateToProps = (state) => {
        console.log(state)
        return {
            categories: state.categoriesReducer.categories,
            services: state.servicesReducer.services,
            loading: state.categoriesReducer.loading,
            loading: state.servicesReducer.loading
        }
    };

    const mapDispatchToProps = dispatch => {
        return {
          fetchCategories: () => dispatch(fetchCategories()),
          fetchServices: () => dispatch(fetchServices()),
    };
 }


export default connect(mapStateToProps, mapDispatchToProps)(Main);




//switch only allows one route to exist at once 
    
      