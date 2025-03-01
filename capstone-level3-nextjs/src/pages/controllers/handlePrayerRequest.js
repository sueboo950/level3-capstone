import React, { useState, useEffect } from 'react';
import { getBibleVerse } from '../utils/getBibleVerse';
import { setLastPrayerRequest, getLastPrayerRequest } from '../utils/localStorageUtils';

const PrayerRequestComponent = () => {
    const [userInput, setUserInput] = useState('');
    const [result, setResult] = useState('');
    const [prayerRequest, setPrayerRequest] = useState('');

    const handlePrayerRequest = (userInput) => {
        setLastPrayerRequest(userInput);
        const verse = getBibleVerse(userInput);
        setResult(verse);
    };

    const loadLastPrayerRequest = () => {
        const lastPrayerRequest = getLastPrayerRequest();
        if (lastPrayerRequest) {
            setPrayerRequest(lastPrayerRequest);
            const verse = getBibleVerse(lastPrayerRequest);
            setResult(verse);
        }
    };

    useEffect(() => {
        loadLastPrayerRequest();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        handlePrayerRequest(userInput);
    };

    return (
        <div>
            <h2>Prayer Request</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            {result && (
                <div>
                    <h3>Result:</h3>
                    <p>{result}</p>
                </div>
            )}
            {prayerRequest && (
                <div>
                    <h3>Last Prayer Request:</h3>
                    <p>{prayerRequest}</p>
                </div>
            )}
        </div>
    );
};

export default PrayerRequestComponent;
