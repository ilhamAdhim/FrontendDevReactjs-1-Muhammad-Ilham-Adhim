import { Button, List, Row, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';

const RestaurantList = props => {

    //? State to store & manipulate Data
    const [displayedData, setDisplayedData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    // ? 
    const [isFiltering, setIsFiltering] = useState(false);
    const [canLoadMore, setCanLoadMore] = useState(false);
    const [isLoadingMoreData, setIsLoadingMoreData] = useState(false);

    useEffect(() => {
        console.log(props.responseData.data)
        setDisplayedData(props.responseData.data.slice(0, 10))
    }, []);

    const loadMore = () => {
        // TODO : Change fetchedDataRestaurant -> props.responseData.data later on
        if (displayedData.length !== props.responseData.data.length) {
            setIsLoadingMoreData(true)
            setDisplayedData(() => [...displayedData,
            ...props.responseData.data.slice(displayedData.length, displayedData.length + 5)])

            setIsLoadingMoreData(false)
        }
    }

    useEffect(() => {
        console.log(displayedData)
    }, [displayedData]);

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
                dataSource={displayedData}
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