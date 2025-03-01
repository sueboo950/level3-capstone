import React from 'react';

const ResourceLinks = () => {
    const links = [
        { text: "211.org", url: "https://www.211.org/" },
        { text: "Suicide Prevention", url: "https://www.nimh.nih.gov/health/topics/suicide-prevention" },
        { text: "Addiction Anonymous", url: "https://alladdictsanonymous.org/" },
    ];

    // Add a console log to ensure links is an array
    console.log("ResourceLinks - links:", links);

    // Check if links is an array before mapping
    if (!Array.isArray(links)) {
        console.error("ResourceLinks - links is not an array:", links);
        return null;
    }

    return (
        <div>
            <h2>Resource Links</h2>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResourceLinks;
