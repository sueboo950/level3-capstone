import { displayVerse } from '../modules/displayVerse.js';
import { displayErrorMessage } from '../modules/displayErrorMessage.js';
import { saveToLocalStorage } from '../utils/saveToLocalStorage.js';

export async function fetchAndDisplayVerse() {
    const userInput = document.getElementById('keywordInput').value;
    const url = `https://bible-api.com/${userInput}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        displayVerse(data);
        saveToLocalStorage(userInput, data);
    } catch (error) {
        console.error('Error fetching Bible verse:', error);
        displayErrorMessage('Error fetching Bible verse. Please try again.');
    }
}
