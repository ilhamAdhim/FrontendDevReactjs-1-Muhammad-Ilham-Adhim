import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const LoginPage = props => {
    useEffect(() => {
        document.title = "Restaurant | Login"
    }, []);

    return (
        <div>
            Login page
        </div>
    );
};

export default LoginPage;