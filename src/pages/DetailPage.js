import React, { useEffect } from 'react';

const DetailPage = props => {
    useEffect(() => {
        document.title = `Restaurant | ${props.name}`
    }, []);

    return (
        <div>
            Detail page
        </div>
    );
};

export default DetailPage;