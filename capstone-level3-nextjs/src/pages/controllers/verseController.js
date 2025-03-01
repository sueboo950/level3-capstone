import React, { useState, useEffect } from 'react';

// Utility functions
const fetchVerse = async (keyword) => {
    const url = `https://bible-api.com/${keyword}`;
    const response = await fetch(url);
    return await response.json();
};

const saveVerseToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getVerseFromLocalStorage = (key) => {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
};

// React component
const BibleVerseComponent = () => {
    const [keyword, setKeyword] = useState('');
    const [verse, setVerse] = useState(null);

    const handleFetchVerse = async (keyword) => {
        const fetchedVerse = await fetchVerse(keyword);
        setVerse(fetchedVerse);
        saveVerseToLocalStorage('lastFetchedVerse', fetchedVerse);
    };

    useEffect(() => {
        const storedVerse = getVerseFromLocalStorage('lastFetchedVerse');
        if (storedVerse) {
            setVerse(storedVerse);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleFetchVerse(keyword);
    };

    return (
        <div>
            <h2>Fetch Bible Verse</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Enter keyword"
                />
                <button type="submit">Fetch Verse</button>
            </form>
            {verse && (
                <div>
                    <h3>Verse:</h3>
                    <p>{verse.text}</p>
                    <p><strong>{verse.reference}</strong></p>
                </div>
            )}
        </div>
    );
};

export default BibleVerseComponent;
