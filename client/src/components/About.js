import React from 'react'
import { Container } from 'semantic-ui-react';



const About = () => {

  return (

    <Container>
      <div className="about-content">
        <h1>Welcome</h1><br />
        <div id="content"> LET'S CONNECT is a community space for special needs resources. This is a place for individuals who have a disability and for those advocating for them, to seek out resources for special services within their area. There are resources for Occupational Therapy, Physical Therapy and Speech Therapy within Connecticut, USA.  </div>
        <img className='about_image' src="https://www.silverdalebc.com/wp-content/uploads/2017/10/Special-Needs-e1508524581748.jpg" />
      </div>
    </Container>
  )
}



export default About