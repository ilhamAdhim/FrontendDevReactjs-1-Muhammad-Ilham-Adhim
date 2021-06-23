// ? Dependencies
import React, { useEffect, useState } from 'react';
import { BackTop, Typography, Row, Divider, Col, Button, Image, Rate, Tooltip, Descriptions, Badge, Skeleton } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { useHistory, useParams } from 'react-router-dom';

// ? Components 
import Reviews from '../components/Reviews';
import MapLocation from '../components/MapLocation';

// ? Icons
import { UpOutlined, LeftOutlined, ClockCircleFilled, EnvironmentFilled } from '@ant-design/icons';

// ? Styles
import { topButtonStyle } from '../styles';
import SkeletonImage from 'antd/lib/skeleton/Image';

const DetailPage = () => {
    const { id } = useParams()
    const [responseData, setResponseData] = useState({});
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        document.title = `Restaurant`

        fetch(`https://travel-advisor.p.rapidapi.com/restaurants/get-details?location_id=${id}&currency=IDR&lang=en_US`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "5f5f6090c6mshe3c64a00c80ba71p1cc3c8jsna5ca7e5362ef",
                "x-rapidapi-host": "travel-advisor.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(jsonResponse => {
                setResponseData(jsonResponse)
                setIsDataLoaded(true)
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    const history = useHistory()

    useEffect(() => {
        document.title = `Restaurant | ${responseData?.name}`
    }, [responseData]);

    const handleGoBack = () => {
        history.push("/")
    }

    return (
        <Content style={{ padding: '0 50px', margin: '16px 0' }}>
            <BackTop>
                <UpOutlined style={topButtonStyle} />
            </BackTop>
            <Row gutter={24}>
                <Col flex={4} md={24} lg={16}>
                    <Row justify="space-between" >
                        <Col>
                            <Tooltip title="Go Back" placement="right" >
                                <Button icon={<LeftOutlined />} onClick={handleGoBack} />
                            </Tooltip>
                        </Col>
                        <Col> <Typography.Title level={2} children={responseData?.name || "Restaurant"} /> </Col>
                        <Col> <Rate disabled value={responseData?.rating || 0} /> </Col>
                    </Row>

                    {isDataLoaded ?
                        <Image width="100%" height="500px" style={{ objectFit: 'contain' }}
                            src={responseData?.photo.images.medium.url}
                            alt={responseData?.photo.caption} />
                        : <SkeletonImage />
                    }

                    {isDataLoaded ?
                        <Row justify="space-between">
                            <Col>
                                <EnvironmentFilled style={{ marginRight: '.5em' }} />
                                <Typography.Text >
                                    {responseData?.location_string}
                                </Typography.Text>
                            </Col>
                            <Col>
                                <ClockCircleFilled style={{ color: responseData?.is_closed ? 'red' : 'green', marginRight: '.7em' }} />
                                <Typography.Text style={{ fontWeight: 'bold', lineHeight: '2em' }}>
                                    {responseData?.is_closed ? 'CLOSED' : 'OPEN NOW'}
                                </Typography.Text>
                            </Col>

                        </Row>
                        :
                        <Skeleton active loading paragraph={1} />
                    }

                    <Divider />

                    {isDataLoaded ?
                        <>
                            <Typography.Title level={3}> Who are we ? </Typography.Title>
                            <Typography.Text italic>
                                {responseData?.description}
                            </Typography.Text>
                            <br /><br />
                            <Typography.Text style={{ fontWeight: 'bold', color: 'grey' }}>
                                Price Range : {"IDR 1,507,000 - IDR 4,333,000"}
                            </Typography.Text>
                            <Divider />
                            <Descriptions title="More Details on Us!" style={{ marginTop: '1em' }}>
                                <Descriptions.Item label="Phone">{responseData?.phone}</Descriptions.Item>
                                <Descriptions.Item label="Website">{responseData?.website}</Descriptions.Item>
                                <Descriptions.Item label="Address">{responseData?.address}</Descriptions.Item>
                            </Descriptions>
                        </>
                        :
                        <Skeleton active loading paragraph={4} />
                    }

                </Col>
                <Col flex={2} md={24} lg={8}>
                    <Row justify="space-around">
                        <Col> <Typography.Title level={2} children="Location" /> </Col>
                        <Col>
                            <Typography.Title
                                level={3}
                                style={{ color: 'grey', lineHeight: '2em' }}
                                children={responseData?.timezone} />
                        </Col>
                    </Row>

                    <MapLocation latitude={responseData?.latitude} longitude={responseData?.longitude} />
                    <Typography.Title level={3} children={`${responseData?.num_reviews} Reviews`} style={{ marginTop: '1em' }} />
                    {/* //TODO : Map Reviews from fetchedResponse   */}
                    <Typography.Title level={4} children={`Top ${responseData?.reviews?.length} reviews`} style={{ marginTop: '1em' }} />
                    {isDataLoaded ? responseData.reviews.map(item => (
                        <Reviews
                            id={item.review_id}
                            author={item.author}
                            title={item.title}
                            summary={item.summary}
                            rating={item.rating}
                        />
                    )) : <Skeleton active avatar />
                    }
                </Col>
            </Row>
        </Content>

    );
};

export default DetailPage;