// import { connect } from 'react-redux';
// import React, { Component } from 'react';
// import Services from '../components/Services/Services';
// import { fetchServices } from '../actions/index';
// // import { fetchCategory } from '../actions/index';
// import { Container } from 'semantic-ui-react'
// import CategoryShowPage from '../components/Categories/CategoryShowPage'

// class ServicesContainer extends Component {

//     // componentDidMount(){
//     //     this.props.fetchServices()
//     // };

//     render() {
//         console.log(this.props)
//         // const categoryId = this.props.match.params.categoryId
//         return (
//        <CategoryShowPage
//         services={this.props.services }
//         categoryId={this.props.category_id}
        
//         />
            
//         )
//     }
// };
  
//     const mapStateToProps = (state) => {
//         console.log(state)
//         return {
//             services: state.servicesReducer.services,
//             loading: state.servicesReducer.loading,
//             // category: state.categoriesReducer.category
//         }
//     }

//     const mapDispatchToProps = dispatch => {
//         return {
//             fetchServices: () => dispatch(fetchServices()),
//             // fetchCategory: categoryId => dispatch(fetchCategory(categoryId)),
//      }
//     }



// export default connect(mapStateToProps, mapDispatchToProps)(ServicesContainer);


// import React, { Component } from 'react';
// import { Container } from 'semantic-ui-react';
// import { Card } from 'semantic-ui-react';
// import './serviceCard.css';

// class Service extends Component {

//     state = {
//     likes: 0
//   }

//     updateLikes = () => {
//       let currentState = this.state.likes

//       this.setState({
//         likes: currentState + 1
//     })
//   }

//     renderServiceCard = (props) => {
//         return (
//             // <div className="grid-container">
//             <Container>
//            <Card className="service_card">
//            <div key={this.props.service.id}>
//             <Card.Content>
//                <Card.Header className="card_header">{this.props.service.name}</Card.Header><br />
//                <Card.Description className="card_description"> {this.props.service.location}</Card.Description><br />
//                <Card.Description className="card_description"> {this.props.service.phone_number}</Card.Description><br />
//                <a target='_blank' href={this.props.service.url}>Website</a>
//                <button onClick={this.updateLikes}> Likes: {this.state.likes} </button><br />
//             </Card.Content>
//             </div>
//             </Card>
//             </Container>
//         )
//     }
   
   
//     render = () => {
//     return (
   
//      <div>
//      {this.renderServiceCard()}
//      </div>
//      )
//     };
// }

// export default Service
