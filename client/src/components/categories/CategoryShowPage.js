import React, { Component } from 'react' //gives your component access to React.Component's functions
import { Container } from 'semantic-ui-react';
import Service from '../Services/Service'
import { connect } from 'react-redux';
import Category from './Category';
import { Card, Image } from 'semantic-ui-react';


//could be a container 
//shows one category and the services that belong to it 

class CategoryShowPage extends Component {

    state = {
        text: ""
    }


    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    //filtering through categories to find the category id that matches the  props.id (id={match.params.id} ) sent from the route in the main container. 

    renderCategory = () => {
        return this.props.categories.filter(category => category.id == this.props.id).map((category) => {
            return (
                <div>
                    <div className="category_name"><h1>{category.name}</h1></div>
                    <div className="category_description" ><h3>{category.description}</h3></div>
                    <div><Image className='category_image' src={category.image} /></div><br />
                </div>
            )
        }
        )
    };


    renderServices = () => {
        let serviceList = this.state.text
            ? this.props.services.filter(service => service.location.toLowerCase().includes(this.state.text.toLowerCase()))
            : this.props.services.filter(service => service.category_id == this.props.id)
        serviceList = serviceList.map((service) => {
            return <Service key={service.id} service={service} />
        })

        return (
            <ul>
                {serviceList}
            </ul>
        )
    }


    render = () => {

        return (
            <div className="grid-container-services">
                <Container>
                    {this.renderCategory()}
                    {this.renderServices()}
                    <input
                        type="text"
                        value={this.state.text}
                        onChange={this.handleChange}>
                    </input>
                </Container>
            </div>

        )
    };
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        categories: state.categoriesReducer.categories,
        services: state.servicesReducer.services
    }
};

export default connect(mapStateToProps)(CategoryShowPage);


