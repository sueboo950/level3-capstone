export function displayErrorMessage(message) {
    const errorContainer = document.getElementById('errorContainer');
    errorContainer.innerHTML = `<p>${message}</p>`;
}
