import React from 'react';
import { Container, Button, Icon } from 'semantic-ui-react'
import NavBar from './NavBar'

const Home = () => (

    <Container>
    <div className ="homepage">
    <img src='https://irp-cdn.multiscreensite.com/2c85fd77/dms3rep/multi/special-needs-children-in-developing-countries_opt.jpg' alt="earth spinning" className='homepage_pic'></img>
    </div>
    <NavBar />
    </Container>
)

export default Home;