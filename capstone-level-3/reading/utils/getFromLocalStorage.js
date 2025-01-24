import { displayErrorMessage } from '../modules/displayErrorMessage.js';

export async function getFromLocalStorage(key) {
    try {
        const value = localStorage.getItem(key);
        return JSON.parse(value);
    } catch (error) {
        console.error('Error retrieving from local storage:', error);
        displayErrorMessage('Error retrieving data. Please try again.');
    }
}
