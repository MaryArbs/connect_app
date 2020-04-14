import React from 'react';
import { Container } from 'semantic-ui-react';
import { Card, Image} from 'semantic-ui-react';

const Service = props => {
    return (
        <div>
            {props.service.name}
        </div>
    )

}

export default Service