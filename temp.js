async function fetchAndDisplayVerse() {
    const userInput = document.getElementById('verseInput').value;
    const url = `https://bible-api.com/${encodeURIComponent(userInput)}?verse_numbers=true`;

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

function displayVerse(data) {
    const verseContainer = document.getElementById('verseContainer');
    verseContainer.innerHTML = `
        <p>${data.reference}</p>
        <p>${data.text}</p>
    `;
}

function displayErrorMessage(message) {
    const errorContainer = document.getElementById('errorContainer');
    errorContainer.innerHTML = `<p>${message}</p>`;
}

async function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error saving to local storage:', error);
        displayErrorMessage('Error saving data. Please try again.');
    }
}

async function getFromLocalStorage(key) {
    try {
        const value = localStorage.getItem(key);
        return JSON.parse(value);
    } catch (error) {
        console.error('Error retrieving from local storage:', error);
        displayErrorMessage('Error retrieving data. Please try again.');
    }
}

document.querySelector('button').addEventListener('click', fetchAndDisplayVerse);
