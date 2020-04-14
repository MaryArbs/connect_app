import { connect } from 'react-redux';
import React, { Component } from 'react';
import Services from '../components/Services/Services';
import { fetchServices } from '../actions/index';
import { Container } from 'semantic-ui-react'
import CategoryShowPage from '../components/Categories/CategoryShowPage'

class ServicesContainer extends Component {

    componentDidMount(){
        console.log("component did mount")
        this.props.fetchServices()
    };

    render() {
        return (
       <CategoryShowPage
        services={this.props.services }
        categoryId={this.props.category_id}
        
        />
            
        )
    }
};
  

    const mapStateToProps = (state) => {
        console.log(state)
        return {
            services: state.servicesReducer.services,
            loading: state.servicesReducer.loading
        }

}


export default connect(mapStateToProps, {fetchServices})(ServicesContainer);
