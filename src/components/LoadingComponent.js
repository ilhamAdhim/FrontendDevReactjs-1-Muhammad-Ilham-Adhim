import React from 'react';
import { Col, Row, Skeleton } from 'antd';

const LoadingComponent = props => {
    return (
        <Row gutter={16} justify="space-around" style={{ marginTop: '10em' }}>
            <Col><Skeleton active avatar /></Col>
            <Col><Skeleton active avatar /></Col>
            <Col><Skeleton active avatar /></Col>
        </Row>
    );
};

export default LoadingComponent;