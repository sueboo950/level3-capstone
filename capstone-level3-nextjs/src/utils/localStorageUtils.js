export const setLastPrayerRequest = (userInput) => {
    localStorage.setItem('lastPrayerRequest', userInput);
};

export const getLastPrayerRequest = () => {
    return localStorage.getItem('lastPrayerRequest');
};
