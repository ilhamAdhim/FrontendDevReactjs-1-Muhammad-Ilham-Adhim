import React, { useEffect } from 'react';

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