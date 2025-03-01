import React, { useState } from 'react';
import { BibleReadingHeroSection } from '../components/HeroSection';
import BibleReading from '../components/BibleReading';
import { fetchVerse, saveToLocalStorage, getFromLocalStorage } from '../utils/apiUtils';
import NavBar from '../components/Navbar';
import HelpResources from '../components/HelpfulResources';

const BibleReadingPage = () => {
    const [userInput, setUserInput] = useState('');
    const [verse, setVerse] = useState(null);
    const [error, setError] = useState(null);

    const fetchAndDisplayVerse = async () => {
        try {
            const data = await fetchVerse(userInput);
            setVerse(data);
            saveToLocalStorage(userInput, data);
        } catch (error) {
            console.error('Error fetching Bible verse:', error);
            setError('Error fetching Bible verse. Please try again.');
        }
    };

    return (
        <div>
            <NavBar />
            <BibleReadingHeroSection
                onUserInputChange={setUserInput}
                onSubmit={fetchAndDisplayVerse}
            />
            <BibleReading verse={verse} error={error} />
            <HelpResources />
        </div>
    );
};

export default BibleReadingPage;

