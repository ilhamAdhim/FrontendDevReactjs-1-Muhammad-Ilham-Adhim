import React, { useEffect, useState } from 'react';
import { Layout, BackTop, Typography, Row, Divider, Col, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import RestaurantList from '../components/RestaurantList';
import { UpOutlined } from '@ant-design/icons';
import PriceDropdown from '../utils/PriceDropdown';
import DropdownComponent from '../components/Dropdown';
import CategoryDropdown from '../utils/CategoryDropdown';

const { Content, Footer } = Layout;

const topButtonStyle = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
}

const MainPage = props => {
    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        document.title = "Restaurant | Home"

        // TODO : Fetch from API
        /* fetch(``)
            .then(response => {
                setResponseData(response)
            })
            .catch(err => console.log(err)) */
    }, []);

    return (
        <Content style={{ padding: '0 50px', margin: '16px 0' }}>
            <BackTop>
                <UpOutlined style={topButtonStyle} />
            </BackTop>
            <Row style={{ width: '50%', padding: '1em' }}>
                <Title level="h1" underline> Restaurants </Title>
                <Typography.Paragraph copyable>
                    Aliqua excepteur id deserunt labore cupidatat. Ullamco eu adipisicing in id ullamco adipisicing ex in culpa cillum ut. Voluptate adipisicing ea voluptate excepteur ipsum quis Lorem voluptate cillum in. Mollit do excepteur ad exercitation tempor tempor reprehenderit cupidatat culpa nisi. Aliqua est irure veniam dolor aliqua proident.
                    minim aute non labore veniam laborum. Excepteur cillum consequat sit pariatur irure do minim. Nisi id esse deserunt id ea.
                </Typography.Paragraph>
            </Row>
            <Divider style={{ color: 'black', padding: 0, margin: 0 }} />
            <Row style={{ padding: '1em 2em' }} justify="space-between">
                <Col>
                    <Row gutter={36}>
                        <Col style={{ marginTop: '.3em' }}>Filter By : </Col>
                        <Col style={{ marginTop: '.3em' }}>Open Now</Col>
                        <Col>
                            <DropdownComponent menu={PriceDropdown} name="Price" />
                        </Col>
                        <Col>
                            <DropdownComponent menu={CategoryDropdown} name="Category" />
                        </Col>
                    </Row>
                </Col>
                <Col style={{ marginRight: '4em' }}>
                    <Button style={{ width: '150%', letterSpacing: '.11em' }}> CLEAR ALL</Button>
                </Col>
            </Row>
            <Divider style={{ color: 'black', padding: 0, margin: 0 }} />
            <RestaurantList data={responseData} />
            <Footer style={{ textAlign: 'center', backgroundColor: 'white', marginTop: '2em' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Content>
    );
};

export default MainPage;