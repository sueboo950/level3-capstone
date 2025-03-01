import React from 'react';
import ResourceLinks from '../modules/ResourceLinks'; // Correctly import the ResourceLinks component
import Link from 'next/link';

const HelpfulResources = () => (
    <div className="container text-justify">
        <h3>Help Resources....</h3>
        <ResourceLinks /> {/* Use the ResourceLinks component instead of mapping over it */}
    </div>
);

export default HelpfulResources;
