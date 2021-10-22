import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ReportDetailObj } from '../pages/ReportDetail'
import { ReportDetailRow } from './ReportDetailRow';

interface Props extends ReportDetailObj {
    
}

export const ReportDetailComponent = (props: Props) => { 
    const [filterWord, setFilterWord] = useState('');
    const failedTestsInitial = props?.endpoints.filter(({status}) => status !== "SUCCESS");
    const successTestsInitial = props?.endpoints.filter(({status}) => status === "SUCCESS");
    const [failedTests, setFailedTests] = useState(failedTestsInitial);
    const [successTests, setSuccessTests] = useState(successTestsInitial);

    const handleFileterByEndpoint = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterWord(event.target.value);
        if(!event.target.value){
            setFailedTests(failedTestsInitial);
            setSuccessTests(successTestsInitial);
        } else {
            setFailedTests(failedTestsInitial.filter(({url}) => url.includes(event.target.value)));
            setSuccessTests(successTestsInitial.filter(({url}) => url.includes(event.target.value)));
        }
    }

    return (
        <>
        <Container fluid>
            <Row>
                <Col>
                    <Row>
                        <Col>Duration: {props.duration}</Col>
                        <Col>Finished: {props.end_date}</Col>
                    </Row>
                    <Row>
                        <Col>{props.job_name}</Col>
                    </Row>
                    <Row>
                        <Col>{props.branch}</Col>
                        <Col>{props.commit}</Col>
                        <Col>{props.github_user}</Col>
                    </Row>
                    <Row>
                        <Col>{props.environment_url}</Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        <hr></hr>
        <Container fluid>
        <Row>
                <Col>
                    <Row>
                        <Col>Results</Col>
                    </Row>
                    <Row>
                        <Col><input placeholder="Filter by endpoint" onChange={handleFileterByEndpoint} ></input></Col>
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col>
                            <Row>
                                <Col className="text-danger">Failed Tests ({failedTests?.length}/{props?.endpoints?.length})</Col>
                            </Row>
                            <Row>
                                <ul className="list-unstyled">
                                    {failedTests.map((endpoint)=> <li><ReportDetailRow success={false} url={endpoint.url} duration={endpoint.duration} /></li>)}
                                </ul>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                            <Col className="text-success">Passed Tests ({successTests?.length}/{props?.endpoints?.length})</Col>
                            </Row>
                            <Row>
                                <ul className="list-unstyled">
                                {successTests.map((endpoint)=> <li><ReportDetailRow success={true} url={endpoint.url} duration={endpoint.duration} /></li>)}
                                </ul>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>            
        </>
    )
}
