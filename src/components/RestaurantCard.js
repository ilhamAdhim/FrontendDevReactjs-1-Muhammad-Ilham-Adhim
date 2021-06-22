import React from 'react';
import { Card, Col, Button, Row, Typography, Divider, Rate, Image, } from 'antd';
import { ClockCircleFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const RestaurantCard = ({
    _id,
    restaurantName = "Hello World Resto",
    imageSrc = "https://picsum.photos/id/598/750/400",
    cuisine = [{
        name: 'Thai'
    }],
    price_level = "$$$",
    is_closed = true
}) => {

    return (
        <Card hoverable style={{ cursor: 'default' }}>
            <Image src={imageSrc} width="100%" alt="alt" />
            <Row justify="space-between" style={{ fontWeight: "bold" }}>
                <Col> {restaurantName} </Col>
            </Row>
            <Row style={{ marginTop: "1em" }}>
                <Rate disabled defaultValue={"5.0"} />
            </Row>
            <Row style={{ marginTop: "1em", lineHeight: '2em' }} justify="space-between">
                <Col>
                    <Typography.Text type="secondary">
                        {`${cuisine[0].name} • ${price_level}`}
                    </Typography.Text>
                </Col>
                <Col>
                    <ClockCircleFilled style={{ color: is_closed ? 'red' : 'green', marginRight: '.7em' }} />
                    <Typography.Text style={{ color: 'grey', lineHeight: '2em' }}>
                        {is_closed ? 'CLOSED' : 'OPEN NOW'}
                    </Typography.Text>
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col span={24}>
                    <Link to={`/detail/${_id}`} >
                        <Button
                            style={{ width: '100%', letterSpacing: '.15em', backgroundColor: '#285194', color: 'white' }}>
                            LEARN MORE
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Card>
    );
};

export default RestaurantCard;