import { getBibleVerse } from '../utils/getBibleVerse.js';

export function handlePrayerRequest() {
    const userInput = document.getElementById('prayer-requestInput').value;
    const userName = document.getElementById('nameInput').value || "Guest";
    localStorage.setItem('lastPrayerRequest', userInput);
    const verse = getBibleVerse(userInput, userName);
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.textContent = verse;
    }
}

window.handlePrayerRequest = handlePrayerRequest;


