import { getBibleVerse } from '../utils/getBibleVerse';
import { setLastPrayerRequest, getLastPrayerRequest } from '../utils/localStorageUtils';

export const handlePrayerRequest = (userInput, setResult) => {
    setLastPrayerRequest(userInput);
    const verse = getBibleVerse(userInput);
    setResult(verse);
};

export const loadLastPrayerRequest = (setPrayerRequest, setResult) => {
    const lastPrayerRequest = getLastPrayerRequest();
    if (lastPrayerRequest) {
        setPrayerRequest(lastPrayerRequest);
        const verse = getBibleVerse(lastPrayerRequest);
        setResult(verse);
    }
};
