import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CategoriesContainer from '../containers/CategoriesContainer'
import Header from '../components/Header'
import Home from '../components/Home'
// import ServicesContainer from '../containers/ServicesContainer'
import CategoryShowPage from '../components/Categories/CategoryShowPage'
import Footer from '../components/Footer'
import { fetchServices } from '../actions/index';
import { fetchCategories } from '../actions/index';
import Categories from '../components/Categories/Categories';
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
              <Route exact path='/categories/:categoryId' component={ CategoryShowPage } />
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

//set up match params  www.localhost:3000/categories/1
//CategoryShowPage to display all the services for the category 

//services not showing up unless rendered here 


//switch only allows one route to exist at once 
    
      
   


// export default Main;