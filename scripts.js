// scripts.js
// Simulated video data
const videos = [
    { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Video 3', thumbnail: 'https://via.placeholder.com/150' }
];

// Function to render video cards
function renderVideos() {
    const videoGrid = document.getElementById('video-grid');
    videoGrid.innerHTML = '';

    videos.forEach(video => {
        const card = document.createElement('div');
        card.classList.add('video-card');
        card.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <h2>${video.title}</h2>
        `;
        videoGrid.appendChild(card);
    });
}

// Initial render of videos
document.addEventListener('DOMContentLoaded', () => {
    renderVideos();
});
