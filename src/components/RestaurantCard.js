import React from 'react';
import { Card, Col, Button, Row, Typography, Divider, Rate, Image, } from 'antd';
import { ClockCircleFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const RestaurantCard = ({
    location_id,
    name = "Hello World Resto",
    cuisine = [{
        name: 'Thai'
    }],
    price_level = "$$$",
    is_closed = true,
    rating = '5.0',
    photo = {
        images: {
            small: {
                url: 'https://picsum.photos/id/1060/600/310'
            }
        },
        caption: 'Alt text'
    }
}) => {

    return (
        <Card hoverable style={{ cursor: 'default' }}>
            <Image src={photo.images.small.url} width="100%" alt={photo.caption} height="200px" />
            <Row justify="space-between" style={{ fontWeight: "bold" }}>
                <Col> {name} </Col>
            </Row>
            <Row style={{ marginTop: "1em" }}>
                <Rate allowHalf disabled defaultValue={rating} />
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
                    <Link to={`/detail/${location_id}`} >
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