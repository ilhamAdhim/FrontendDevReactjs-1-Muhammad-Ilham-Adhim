import React from 'react';
import { Card, Col, Button, Row, Typography, Divider, Rate, } from 'antd';
import { ClockCircleFilled } from '@ant-design/icons';

const RestaurantCard = (props) => {
    return (
        <Card hoverable>
            <img alt={props.image} src={props.image} width="100%" height={250} />
            <Row justify="space-between" style={{ fontWeight: "bold" }}>
                <Col> {props.product_name} </Col>
                <Button type="primary" style={{ fontWeight: "bold" }} >{props.category.name}</Button>
            </Row>
            <Row style={{ marginTop: "1em" }}>
                <Rate disabled defaultValue={"5.0"} />
            </Row>
            <Row style={{ marginTop: "1em", lineHeight: '2em' }} justify="space-between">
                <Col>
                    <Typography.Text type="secondary">
                        {props.location}
                        {/* {`${props.type} • ${props.price_level}` } */}
                    </Typography.Text>
                </Col>
                <Col>
                    <ClockCircleFilled style={{ color: 'red', marginRight: '.7em' }} />
                    <Typography.Text style={{ color: 'grey', lineHeight: '2em' }}>
                        OPEN NOW
                        {/* props.is_closed ? 'OPEN NOW ' : 'CLOSED' */}
                    </Typography.Text>
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col span={24}>
                    <Button
                        style={{ width: '100%', letterSpacing: '.15em', backgroundColor: '#285194', color: 'white' }}>
                        LEARN MORE
                    </Button>
                </Col>
            </Row>
        </Card>
    );
};

export default RestaurantCard;