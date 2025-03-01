import React, { useState, useEffect } from 'react';
import { fetchVerse, saveToLocalStorage, getFromLocalStorage } from '../utils/utils'; // Adjust the import path as necessary

const BibleVerseComponent = () => {
    const [keyword, setKeyword] = useState('');
    const [verse, setVerse] = useState(null);

    const handleFetchVerse = async (keyword) => {
        const fetchedVerse = await fetchVerse(keyword);
        setVerse(fetchedVerse);
        saveToLocalStorage('lastFetchedVerse', fetchedVerse);
    };

    useEffect(() => {
        const storedVerse = getFromLocalStorage('lastFetchedVerse');
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
