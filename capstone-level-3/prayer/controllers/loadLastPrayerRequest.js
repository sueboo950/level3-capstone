import { getBibleVerse } from '../utils/getBibleVerse.js';

export function loadLastPrayerRequest() {
    const lastPrayerRequest = localStorage.getItem('lastPrayerRequest');
    if (lastPrayerRequest) {
        document.getElementById('prayer-requestInput').value = lastPrayerRequest;
        const userName = document.getElementById('nameInput').value || "Guest";
        const verse = getBibleVerse(lastPrayerRequest, userName);
        const resultDiv = document.getElementById('result');
        if (resultDiv) {
            resultDiv.textContent = verse;
        }
    }
}

window.onload = loadLastPrayerRequest;


