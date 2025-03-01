import React, { useEffect } from 'react';

const HomePageController = () => {
    useEffect(() => {
        console.log("HomePage loaded successfully.");
    }, []);

    return (
        <div>
            Home Page Content
        </div>
    );
};

export default HomePageController;

