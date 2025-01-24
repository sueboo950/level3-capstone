import { getBibleVerse } from '../utils/getBibleVerse.js';

export function handlePrayerRequest() {
    const userInput = document.getElementById('prayer-requestInput').value;
    localStorage.setItem('lastPrayerRequest', userInput);
    const verse = getBibleVerse(userInput);
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = verse;
}
