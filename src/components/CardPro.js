import React from "react";
import Card from 'react-bootstrap/Card';
import 'antd/dist/antd.css';
function CardPro(props) {
    return ( 
        <>
            <Card border="primary" style={{ width: '18rem', display: 'flex' }}>
                                        <Card.Header>Header</Card.Header>
                                        <Card.Body>
                                        <Card.Title>Primary Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                         </Card.Text>
                     </Card.Body>
             </Card>
        </>
     );
}

export default CardPro;