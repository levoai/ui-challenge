import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

interface Props {
    subtitle?: string,
    menu?: Array<JSX.Element>,
    children?: React.ReactNode;
}

export const Layout = (props: Props) => {
    return (
        <Container fluid>
            <Row >
                <Col md={1}>
                    <h1>Levo</h1>
                    {props.subtitle &&
                        <p>{props.subtitle}</p>
                    } 
                    {props.menu && 
                        <ul className="list-unstyled">
                            {props.menu.map((object: JSX.Element, i: number) => <li key={i}>{object}</li> )}
                        </ul>
                    }
                </Col>
                <Col md={11}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    )
}
