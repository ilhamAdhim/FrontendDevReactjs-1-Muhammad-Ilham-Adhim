// ? Dependencies
import React, { useEffect, useState } from 'react';
import Title from 'antd/lib/typography/Title';
import { Layout, BackTop, Typography, Row, Divider, Col, Button, Checkbox } from 'antd';

// ? Components 
import DropdownFilterComponent from '../components/DropdownFilterComponent';
import RestaurantList from '../components/RestaurantList';

// ? Icons
import { UpOutlined } from '@ant-design/icons';

// ? Styles
import { topButtonStyle } from '../styles';

// ? Utils
import PriceDropdown from '../utils/PriceDropdown';
import CategoryDropdown from '../utils/CategoryDropdown';
import LoadingComponent from '../components/LoadingComponent';
import { getData } from '../utils/DataCRUD';

const { Content, Footer } = Layout;
const MainPage = props => {

    // ? State Data
    const [responseData, setResponseData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    // ? State Filters
    const [isFiltering, setIsFiltering] = useState(false);
    const [currentFilter, setCurrentFilter] = useState("");

    const [filterIsOpen, setFilterIsOpen] = useState(false);

    useEffect(() => {
        document.title = "Restaurant | Home"

        // TODO : Fetch from API LINK : 
        getData("https://travel-advisor.p.rapidapi.com/restaurants/list?location_id=293919&restaurant_tagcategory=10591&restaurant_tagcategory_standalone=10591&currency=IDR&lunit=km&limit=30&lang=en_US")
            .then(jsonResponse => {
                setResponseData(jsonResponse)
                setIsDataLoaded(true)
            })
            .catch(err => {
                console.error(err);
            });

    }, []);

    // ? Handlers
    const handleFilterIsOpen = () => {
        setIsFiltering(true)
        setCurrentFilter(!filterIsOpen ? "open" : "closed")
        setFilteredData(() => {
            return {
                data: responseData?.data?.filter((item) => {
                    if ('is_closed' in item)
                        return item.is_closed === filterIsOpen
                    return item
                })
            }
        })
    }

    const handleFilterPriceLevel = (priceRange) => {
        setIsFiltering(true)
        setCurrentFilter(priceRange.value)
        setFilteredData(() => {
            return {
                data: filterIsOpen ?
                    filteredData?.data?.filter(item => item.price_level === priceRange.value) :
                    responseData?.data?.filter(item => item.price_level === priceRange.value)
            }
        })
    }

    const resetAllFilters = () => {
        setIsFiltering(false)
        setFilterIsOpen(false)
    }

    const fetchByCuisine = (cuisineCategory) => {
        setIsDataLoaded(false)
        console.log(cuisineCategory)
        getData(`https://travel-advisor.p.rapidapi.com/restaurants/list?location_id=293919&currency=IDR&combined_food=${cuisineCategory.id}&lang=en_US`)
            .then(jsonResponse => {
                setFilteredData(jsonResponse)
                setIsDataLoaded(true)
                setIsFiltering(true)
                setCurrentFilter(` have ${cuisineCategory.value} cuisine`)
            })
            .catch(err => {
                console.error(err);
            });
    }

    useEffect(() => {
        console.log(filteredData)
    }, [filteredData]);

    return (
        <Content style={{ padding: '0 50px', margin: '16px 0' }}>
            <BackTop>
                <UpOutlined style={topButtonStyle} />
            </BackTop>
            <Row style={{ padding: '1em' }}>
                <Col sm={24} md={12} lg={12}>
                    <Title level={1} underline> Restaurants </Title>
                    <Typography.Paragraph copyable>
                        Aliqua excepteur id deserunt labore cupidatat. Ullamco eu adipisicing in id ullamco adipisicing ex in culpa cillum ut. Voluptate adipisicing ea voluptate excepteur ipsum quis Lorem voluptate
                    </Typography.Paragraph>
                </Col>
            </Row>
            <Divider style={{ color: 'black', padding: 0, margin: 0 }} />
            <Row style={{ padding: '1em 2em' }} justify="space-between">
                <Col sm={24} md={16}>
                    <Row justify="start">
                        <Col sm={12} md={3} style={{ marginTop: '.3em', marginRight: '2em' }}>Filter By : </Col>
                        <Col sm={12} md={3} style={{ marginTop: '.3em' }}>
                            <Checkbox
                                checked={filterIsOpen}
                                onChange={() => {
                                    setFilterIsOpen(!filterIsOpen)
                                    handleFilterIsOpen()
                                }}
                            >
                                Open Now
                            </Checkbox>
                        </Col>
                        <Col sm={12} md={3}>
                            <DropdownFilterComponent menu={PriceDropdown} name="Price"
                                customHandler={(priceRange) => handleFilterPriceLevel(priceRange)} />
                        </Col>
                        <Col sm={12} md={3}>
                            <DropdownFilterComponent menu={CategoryDropdown} name="Category"
                                customHandler={(cuisineCategory) => fetchByCuisine(cuisineCategory)} />
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} md={4} style={{ marginRight: '4em' }}>
                    <Button
                        onClick={resetAllFilters}
                        style={{ width: '100%', letterSpacing: '.11em' }}>
                        CLEAR ALL</Button>
                </Col>
            </Row>

            <Typography.Title level={3} style={{ marginLeft: '1em' }}>
                {isFiltering ? `${filteredData.data.length} restaurants are ${currentFilter}` : 'Restaurant List'}
            </Typography.Title>
            <Divider style={{ color: 'black', padding: 0, margin: 0 }} />
            {isDataLoaded ?
                <RestaurantList responseData={isFiltering ? filteredData : responseData} />
                : <LoadingComponent />
            }

            <Footer style={{ textAlign: 'center', backgroundColor: 'white', marginTop: '2em' }}>Muhammad Ilham Adhim © Sekawan Media 2021 </Footer>
        </Content>
    );
};

export default MainPage;