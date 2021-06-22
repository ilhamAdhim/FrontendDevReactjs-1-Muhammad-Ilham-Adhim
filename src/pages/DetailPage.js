// ? Dependencies
import React, { useEffect, useState } from 'react';
import { BackTop, Typography, Row, Divider, Col, Button, Image, Rate, Tooltip, Descriptions, Badge } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { useHistory, useParams } from 'react-router-dom';

// ? Components 
import Reviews from '../components/Reviews';
import MapLocation from '../components/MapLocation';

// ? Icons
import { UpOutlined, LeftOutlined, ClockCircleFilled, EnvironmentFilled } from '@ant-design/icons';

// ? Styles
import { topButtonStyle } from '../styles';
import Text from 'antd/lib/typography/Text';

const DetailPage = () => {
    const { id } = useParams()
    const [data, setData] = useState({});

    useEffect(() => {
        document.title = `Restaurant | ${id}`
        // TODO : Fetch from API
        /* fetch(`https://travel-advisor.p.rapidapi.com/restaurants/get-details?location_id=${id}&currency=IDR&lang=en_US`)
        .then(response => {
        setResponseData(response)
        })
        .catch(err => console.log(err)) */
    }, []);

    const history = useHistory()

    const handleGoBack = () => {
        history.goBack()
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
                        <Col> <Typography.Title level={2} children="Restaurant Name" /> </Col>
                        <Col> <Rate disabled defaultValue={"5.0"} /> </Col>
                    </Row>
                    <Image src="https://picsum.photos/id/598/750/400" width="100%" />

                    {/* // TODO : location_string */}
                    <Row justify="space-between">
                        <Col>
                            <EnvironmentFilled style={{ marginRight: '.5em' }} />
                            <Typography.Text >
                                {`Pattaya, Chonburi Province`}
                            </Typography.Text>
                        </Col>
                        <Col>
                            <ClockCircleFilled style={{ color: 'red', marginRight: '.7em' }} />
                            <Typography.Text style={{ fontWeight: 'bold', lineHeight: '2em' }}>
                                {'CLOSED'}
                            </Typography.Text>
                        </Col>

                    </Row>


                    <Divider />
                    <Typography.Title level={3}> Who are we ? </Typography.Title>
                    {/* // TODO : Description*/}
                    <Typography.Text italic>
                        The Charm of Authentic Thai Cuisine Ruenthai Restaurant Pattaya, this Thai cuisine restaurant has been the renowned landmark alongside Pattaya City for over 30 years. Our uniqueness is ready to create the experience and long-lasting impression for all visitors, such as Thai traditional classic dance and the food carving show, the traditional Thai artistry with the legacy that has been passed on for generations. We also create over 100 menus of authentic traditional Thai cuisine to ensure that you will experience the rich Thai culinary with a perfectly-blended and palatable flavor. Moreover, various seafood and international dishes are also prepared at your service. Ruenthai Restaurant is designed and decorated in the traditional Thai style house. The spacious venue is able to serve approximately 300 – 350 clients. This is one of the ideal locations for hosting a party, wedding, seminar, and many other events. Ruenthai Restaurant Pattaya, we welcome all visitors.
                    </Typography.Text>
                    <br /><br />
                    <Typography.Text style={{ fontWeight: 'bold', color: 'grey' }}>
                        Price Range : {"IDR 1,507,000 - IDR 4,333,000"}
                    </Typography.Text>
                    <Divider />
                    <Descriptions title="More Details on Us!" style={{ marginTop: '1em' }}>
                        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>

                        {/* // TODO : Phone  */}
                        <Descriptions.Item label="Phone">+66 89 456 9193</Descriptions.Item>

                        {/* // TODO : Website  */}
                        <Descriptions.Item label="Website">http://www.ruenthairestaurant.com</Descriptions.Item>

                        <Descriptions.Item label="Remark">empty</Descriptions.Item>

                        {/* // TODO : Address  */}
                        <Descriptions.Item label="Address">
                            2nd Road 485/3 m.10 pattaya 2nd road Southpattaya Chonburi, Pattaya 20150 Thailand
                        </Descriptions.Item>
                    </Descriptions>,

                </Col>
                <Col flex={2} md={24} lg={8}>
                    <Row justify="space-around">
                        <Col> <Typography.Title level={2} children="Location" /> </Col>
                        <Col>
                            {/* // TODO : Timezone  */}
                            <Typography.Title
                                level={3}
                                style={{ color: 'grey', lineHeight: '2em' }}
                                children="Asia/Bangkok" />
                        </Col>
                    </Row>

                    {/* // TODO : latitude and longitude  */}
                    <MapLocation latitude={data?.latitude} longitude={data?.longitude} />
                    {/* // TODO : num_reviews  */}
                    <Typography.Title level={3} children={`${744} Reviews`} style={{ marginTop: '1em' }} />
                    <Reviews />
                    <Reviews />
                    <Reviews />
                    <Reviews />
                    {/* //TODO : Map Reviews from fetchedResponse   */}
                </Col>
            </Row>
        </Content>

    );
};

export default DetailPage;