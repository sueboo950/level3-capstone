import { getBibleVerse } from '../utils/getBibleVerse.js';

export function loadLastPrayerRequest() {
    const lastPrayerRequest = localStorage.getItem('lastPrayerRequest');
    if (lastPrayerRequest) {
        document.getElementById('prayer-requestInput').value = lastPrayerRequest;
        const verse = getBibleVerse(lastPrayerRequest);
        const resultDiv = document.getElementById('result');
        resultDiv.textContent = verse;
    }
}

window.onload = loadLastPrayerRequest;
