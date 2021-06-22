import { Button, List, Row, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';

const RestaurantList = props => {
    const [filteredProductList, setFilteredProductList] = useState([{
        _id: 0,
        restaurantName: 'Penggaris',
        is_closed: false,
        cuisine: [{
            name: 'Thai'
        }],
        price_level: '$',
    },
    {
        _id: 1,
        restaurantName: 'Penggaris Haha',
        is_closed: false,
        cuisine: [{
            name: 'French'
        }],
        price_level: '$$',
    },
    {
        _id: 2,
        restaurantName: 'Penggaris Haha',
        imageSrc: 'https://picsum.photos/id/1060/600/310',
        is_closed: true,
        cuisine: [{
            name: 'Thai'
        }],
        price_level: '$',
    },
    {
        _id: 3,
        restaurantName: 'Penggaris Haha',
        imageSrc: 'https://picsum.photos/id/30/600/310',
        is_closed: true,
        cuisine: [{
            name: 'Seafood'
        }],
        price_level: '$$$$',
    },
    {
        _id: 4,
        restaurantName: 'Penggaris Haha',
        imageSrc: 'https://picsum.photos/id/431/600/310',
        is_closed: false,
        cuisine: [{
            name: 'Japanese'
        }],
        price_level: '$',
    },
    ]);

    //? State to store & manipulate Data
    const [fetchedDataRestaurant, setFetchedDataRestaurant] = useState(props.data);
    const [displayedData, setDisplayedData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    // ? 
    const [isFiltering, setIsFiltering] = useState(false);
    const [canLoadMore, setCanLoadMore] = useState(false);
    const [isDataLoaded, setIsDataLoaded] = useState(true);
    const [isLoadingMoreData, setIsLoadingMoreData] = useState(false);

    useEffect(() => {
        setDisplayedData(fetchedDataRestaurant.slice(0, 10))

    }, []);

    const loadMore = () => {
        // TODO : Change fetchedDataRestaurant -> props.data later on
        // if (displayedData.length !== fetchedDataRestaurant.length) {
        setIsLoadingMoreData(true)
        // setDisplayedData(() => [...displayedData, fetchedDataRestaurant.slice(displayedData.length, 10)])
        setFilteredProductList(() => [...filteredProductList, {
            restaurantName: 'Penggaris Haha',
            price: 2700,
            is_closed: true,
            price_level: '$',
        },])
        setIsLoadingMoreData(false)
        // }
    }

    return (
        <>
            <List
                style={{ padding: '1em' }}
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 4,
                    column: 4
                }}
                dataSource={filteredProductList}
                renderItem={(item) => (
                    <List.Item>
                        <RestaurantCard {...item} />
                    </List.Item>
                )}
            />
            <Row justify="center">
                <Button type="primary"
                    size="large"
                    onClick={loadMore}
                    loading={isLoadingMoreData ? true : false}
                    style={{ width: '15%', letterSpacing: '.12em' }}
                >
                    {isLoadingMoreData ? "Loading" : "LOAD MORE"}
                </Button>
            </Row>
        </>
    );
};

export default RestaurantList;