import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router';
import { Layout } from '../components/Layout';
import { ReportRow } from '../components/ReportRow';
import useFetchData from "../hooks/useFetchData";

interface MatchParams {
    id: string;
    name: string;
}

export interface ReportRowObj {
    id: number;
    name: string;
    start_date: string;
    failed_tests: number;
    succeed_tests: number;
}

interface Props extends RouteComponentProps<MatchParams> { 

}

export const Reports = (props: Props) => {
    const { loading, error, response } = useFetchData(`https://my.api.mockaroo.com/organizations/${props.match.params.id}/reports.json?key=2e435a20`); //wired for this poc

    return (
        <Layout subtitle={props.match.params.name}>
            <h2>Test Reports</h2>
            {loading && <p>Loading</p>}
            {error && <p>error</p>}
            {!loading && response && 
                <Container fluid>
                    <Row>
                        <Col>
                            <ul className="list-unstyled">
                                {Object.entries(response).map(([key, value]) => <li><ReportRow org_name={props.match.params.name} org_id={props.match.params.id} row={value as ReportRowObj} /> </li> )}
                            </ul>
                        </Col>
                    </Row>
                </Container>                
            }
        </Layout>
        
    )
}
