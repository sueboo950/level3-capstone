import React, { useState, useEffect } from 'react';
import VerseModel from '../utils/verseModel'; // Adjust the import path as necessary
import { fetchVerse } from '../utils/utils'; // Assuming fetchVerse is in utils.js

const BibleVerseComponent = () => {
    const [keyword, setKeyword] = useState('');
    const [verse, setVerse] = useState(null);

    const handleFetchVerse = async (keyword) => {
        const fetchedVerseData = await fetchVerse(keyword);
        const verseModel = VerseModel(fetchedVerseData);
        setVerse(verseModel);
    };

    useEffect(() => {
        // Add your logic to load verse from local storage if needed
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
