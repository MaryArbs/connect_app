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
import './Main.css'

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
              <Route exact path='/categories/:id' component={ ({match}) => <CategoryShowPage categories={this.props.categories} id={match.params.id} />}/> 
              </div>
         </Switch>
         <Footer />
     </div>
    )};
}
    
    
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
    
      