export function displayVerse(data) {
    const verseContainer = document.getElementById('verseContainer');
    verseContainer.innerHTML = `
        <p>${data.reference}</p>
        <p>${data.text}</p>
    `;
}
