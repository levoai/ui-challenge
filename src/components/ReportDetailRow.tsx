import React from 'react'
import { Col, Row } from 'react-bootstrap'

interface Props {
    url: string;
    duration: number;
    success: boolean;
}

export const ReportDetailRow = (props: Props) => {
    return (
        <Row className={`border border-${props.success ? "success" : "danger"}`}>
            <Col md={11}>
                {props.url}
            </Col>
            <Col md={1}>
                {props.duration}s
            </Col>
        </Row>
    )
}
