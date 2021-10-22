import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ReportRowObj } from '../pages/Reports';

interface Props {
    row: ReportRowObj;
    org_id: string;
    org_name: string;
}

export const ReportRow = (props: Props) => {
    return (
        <Link to={`/ReportDetail/${props.org_id}/${props.org_name}/${props.row.id}`}>
            <Row>
                <Col md={8}><h3>Execution # {props.row.id}</h3></Col>
                <Col md={2}> <p>{props.row.succeed_tests} succeded</p></Col>
                <Col md={2}><p>{props.row.failed_tests} failed</p></Col>
            </Row>
        </Link>
    )
}
