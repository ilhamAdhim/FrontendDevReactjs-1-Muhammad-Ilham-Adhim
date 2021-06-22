import { Button, List, Row, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';

const RestaurantList = props => {
    const [filteredProductList, setFilteredProductList] = useState([{
        _id: 0,
        product_name: 'Penggaris',
        price: 2700,
        category: 'Bagus',
        location: 'Malang',
    },
    {
        _id: 1,
        product_name: 'Penggaris Haha',
        price: 2700,
        category: 'Bagus',
        location: 'Malang',
    },
    {
        _id: 2,
        product_name: 'Penggaris Haha',
        price: 2700,
        category: 'Bagus',
        location: 'Malang',
    },
    {
        _id: 3,
        product_name: 'Penggaris Haha',
        price: 2700,
        category: 'Bagus',
        location: 'Malang',
    },
    {
        _id: 4,
        product_name: 'Penggaris Haha',
        price: 2700,
        category: 'Bagus',
        location: 'Malang',
    },
    ]);

    //? State to store & manipulate Data
    const [fetchedDataRestaurant, setFetchedDataRestaurant] = useState([]);
    const [displayedData, setDisplayedData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    //? 
    const [isFiltering, setIsFiltering] = useState(false);
    const [canLoadMore, setCanLoadMore] = useState(false);
    const [isDataLoaded, setIsDataLoaded] = useState(true);
    const [isLoadingMoreData, setIsLoadingMoreData] = useState(false);

    const loadMore = () => {
        // TODO : Change fetchedDataRestaurant -> props.data later on
        // if (displayedData.length !== fetchedDataRestaurant.length) {
        setIsLoadingMoreData(true)
        // setDisplayedData(() => [...displayedData, fetchedDataRestaurant.slice(displayedData.length, 10)])
        setFilteredProductList(() => [...filteredProductList, {
            product_name: 'Penggaris Haha',
            price: 2700,
            category: 'Bagus',
            location: 'Malang',
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
                        <Link to={`/detail/${item._id}`} _id={item._id}>
                            {isDataLoaded ?
                                <RestaurantCard image={item.image}
                                    _id={item._id}
                                    _id={item._id}
                                    price={item.price}
                                    category={item.category}
                                    product_name={item.product_name}
                                    location={"Malang, Jawa Timur"}
                                /> : <Skeleton avatar active />}

                        </Link>
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