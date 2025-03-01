// utils.js
export const fetchVerse = async (keyword) => {
    const url = `https://bible-api.com/${keyword}`;
    const response = await fetch(url);
    return await response.json();
};

export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key) => {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
};
