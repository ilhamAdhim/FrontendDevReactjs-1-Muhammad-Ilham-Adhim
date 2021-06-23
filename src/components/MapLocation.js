import { Spin } from 'antd';
import React from 'react';
import { mapOuterStyle, mapStyle } from '../styles';

const MapLocation = ({ latitude, longitude }) => {
    console.log(latitude, longitude)
    return (
        <div style={mapOuterStyle}>
            <div style={mapStyle}>
                <iframe width="100%" height="100%" id="gmap_canvas"
                    src={`https://maps.google.com/maps?q=${latitude}%20${longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" alt="loading.." loading="lazy">
                </iframe>
                <a href="https://www.whatismyip-address.com"></a>
                <br />
            </div>
        </div>
    );
};

export default MapLocation;