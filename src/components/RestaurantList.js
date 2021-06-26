import { Button, List, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantList = props => {

    //? State to store & manipulate Data
    const [displayedData, setDisplayedData] = useState([]);

    // ? State for load more data
    const [isLoadingMoreData, setIsLoadingMoreData] = useState(false);
    const [isAllDataLoaded, setIsAllDataLoaded] = useState(false);

    useEffect(() => {
        setDisplayedData(props.responseData?.data?.slice(0, 10))
    }, [props.responseData]);

    const loadMore = () => {
        if (displayedData.length !== props.responseData.data.length) {
            setIsLoadingMoreData(true)
            setDisplayedData(() => [...displayedData,
            ...props.responseData.data.slice(displayedData.length, displayedData.length + 5)])
            setIsLoadingMoreData(false)
        }
    }

    useEffect(() => {
        console.log(displayedData)
        if (displayedData.length === props.responseData.data.length)
            setIsAllDataLoaded(true)
        else
            setIsAllDataLoaded(false)

    }, [displayedData]);

    return (
        <>
            <List
                locale={{ emptyText: "No Restaurants" }}
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
                    disabled={isAllDataLoaded ? true : false}
                    loading={isLoadingMoreData ? true : false}
                    style={{ letterSpacing: '.12em' }}
                >
                    {isAllDataLoaded ? "All Data Loaded" : `LOAD ${props.responseData.data.length - displayedData.length} MORE`}
                </Button>
            </Row>
        </>
    );
};

export default RestaurantList;