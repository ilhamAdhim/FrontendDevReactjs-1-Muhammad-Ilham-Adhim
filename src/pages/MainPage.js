// ? Dependencies
import React, { useEffect, useState } from 'react';
import Title from 'antd/lib/typography/Title';
import { Layout, BackTop, Typography, Row, Divider, Col, Button, Skeleton, List, Card, Checkbox } from 'antd';

// ? Components 
import DropdownComponent from '../components/DropdownComponent';
import RestaurantList from '../components/RestaurantList';

// ? Icons
import { UpOutlined } from '@ant-design/icons';

// ? Styles
import { topButtonStyle } from '../styles';

// ? Utils
import PriceDropdown from '../utils/PriceDropdown';
import CategoryDropdown from '../utils/CategoryDropdown';

const { Content, Footer } = Layout;
const MainPage = props => {

    // TODO : Create Context for filters
    // ...

    // ? State Data
    const [responseData, setResponseData] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    // ? State Filters
    const [filterIsOpen, setFilterIsOpen] = useState(false);
    const [filterPriceLevel, setFilterPriceLevel] = useState('');
    const [filterCuisine, setFilterCuisine] = useState('');

    useEffect(() => {
        document.title = "Restaurant | Home"

        // TODO : Fetch from API
        /* fetch(`https://travel-advisor.p.rapidapi.com/restaurants/list?location_id=293919&currency=IDR&lunit=km&lang=en_US`)
            .then(response => {
                setResponseData(response)
                setIsDataLoaded(true)
            })
            .catch(err => console.log(err)) */
    }, []);

    // ? Handlers
    const handleFilterIsOpen = () => { setFilterIsOpen(!filterIsOpen) }

    const resetAllFilters = () => {
        setFilterIsOpen(false)
        setFilterPriceLevel('')
        setFilterCuisine('')
    }

    return (
        <Content style={{ padding: '0 50px', margin: '16px 0' }}>
            <BackTop>
                <UpOutlined style={topButtonStyle} />
            </BackTop>
            <Row style={{ width: '50%', padding: '1em' }}>
                <Title level={1} underline> Restaurants </Title>
                <Typography.Paragraph copyable>
                    Aliqua excepteur id deserunt labore cupidatat. Ullamco eu adipisicing in id ullamco adipisicing ex in culpa cillum ut. Voluptate adipisicing ea voluptate excepteur ipsum quis Lorem voluptate
                </Typography.Paragraph>
            </Row>
            <Divider style={{ color: 'black', padding: 0, margin: 0 }} />
            <Row style={{ padding: '1em 2em' }} justify="space-between">
                <Col>
                    <Row gutter={36}>
                        <Col style={{ marginTop: '.3em' }}>Filter By : </Col>
                        <Col style={{ marginTop: '.3em' }}>
                            <Checkbox
                                checked={filterIsOpen}
                                onChange={handleFilterIsOpen}
                            >
                                Open Now
                            </Checkbox>
                        </Col>
                        <Col>
                            <DropdownComponent menu={PriceDropdown} name="Price"
                                customHandler={(e) => setFilterPriceLevel(e)} />
                        </Col>
                        <Col>
                            <DropdownComponent menu={CategoryDropdown} name="Category"
                                customHandler={(e) => setFilterCuisine(e)} />
                        </Col>
                    </Row>
                </Col>
                <Col style={{ marginRight: '4em' }}>
                    <Button
                        onClick={resetAllFilters}
                        style={{ width: '150%', letterSpacing: '.11em' }}>
                        CLEAR ALL</Button>
                </Col>
            </Row>

            <Divider style={{ color: 'black', padding: 0, margin: 0 }} />
            {!isDataLoaded ?
                <RestaurantList data={responseData} />
                : <Row gutter={16} justify="space-around" style={{ marginTop: '10em' }}>
                    <Col><Skeleton active avatar /></Col>
                    <Col><Skeleton active avatar /></Col>
                    <Col><Skeleton active avatar /></Col>
                </Row>
            }

            <Footer style={{ textAlign: 'center', backgroundColor: 'white', marginTop: '2em' }}>Muhammad Ilham Adhim © Sekawan Media 2021 </Footer>
        </Content>
    );
};

export default MainPage;