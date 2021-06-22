import React from 'react';
import PropTypes from 'prop-types';
import { Button, Result, Row } from 'antd';
import { Link } from 'react-router-dom';

const NotFound = props => {
    return (
        <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Link to="/">
                        <Button type="primary">
                            Back Home
                        </Button>
                    </Link>
                }
            />
        </Row>
    );
};


export default NotFound;