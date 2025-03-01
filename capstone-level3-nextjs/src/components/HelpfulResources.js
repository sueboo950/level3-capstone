import React from 'react';
import Link from 'next/link';
import ResourceLinks from '../modules/ResourceLinks';

const HelpResources = () => (
    <main>
        <div className="container text-justify">
            <h3>Help Resources....</h3>
            {ResourceLinks.map((link, index) => (
                <Link key={index} href={link.url}>{link.text}</Link>
            ))}
        </div>
    </main>
);

export default HelpResources;
