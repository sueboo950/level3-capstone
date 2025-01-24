import { displayErrorMessage } from '../modules/displayErrorMessage.js';

export async function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error saving to local storage:', error);
        displayErrorMessage('Error saving data. Please try again.');
    }
}
