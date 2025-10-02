

{
    const playlists = [
        { name: "Daily Mix", desc: "Ed Sheeran is on top", image: "./assets/harsh.jpg   " },
        { name: "RapCaviar", desc: "New music from Drake", color: "from-green-500 to-teal-500" },
        { name: "All Out 2010s", desc: "The biggest songs", color: "from-blue-500 to-purple-500" },
        { name: "Rock Classics", desc: "Rock legends & epic songs", color: "from-yellow-500 to-red-500" },
        { name: "Chill Hits", desc: "Kick back to the best", color: "from-pink-500 to-purple-500" }
    ];

    const sidebarPlaylists = [
        "Liked Songs",
        "My Playlist #1",
        "Discover Weekly",
        "Release Radar",
        "Daily Mix 1"
    ];

    // Populate Sidebar Playlists
    const playlistContainer = document.getElementById('playlistContainer');
    sidebarPlaylists.forEach(playlist => {
        const div = document.createElement('div');
        div.className = 'px-3 py-2 text-sm text-gray-400 hover:text-white cursor-pointer rounded transition';
        div.textContent = playlist;
        playlistContainer.appendChild(div);
    });

    // Populate Main Playlists
    const playlistGrid = document.getElementById('playlistGrid');
    playlists.forEach(playlist => {
        const card = document.createElement('div');
        card.className = 'bg-zinc-800 hover:bg-zinc-700 p-4 rounded-lg cursor-pointer transition group';
        card.onclick = () => playSong(playlist.name, playlist.desc);
        card.innerHTML = `
                <div class="w-full aspect-square bg-gradient-to-br ${playlist.color} rounded-lg mb-4 flex items-center justify-center relative">
                    <svg class="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition absolute" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </div>
                <h3 class="font-semibold mb-2">${playlist.name}</h3>
                <p class="text-sm text-gray-400">${playlist.desc}</p>
            `;
        playlistGrid.appendChild(card);
    });

    // Player State
    let isPlaying = false;
    let progress = 0;

    // Play/Pause Toggle
    function togglePlay() {
        isPlaying = !isPlaying;
        const playIcon = document.getElementById('playIcon');
        const pauseIcon = document.getElementById('pauseIcon');

        if (isPlaying) {
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
            startProgress();
        } else {
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
            stopProgress();
        }
    }

    // Play Song
    function playSong(name, artist) {
        document.getElementById('currentTrackName').textContent = name;
        document.getElementById('currentTrackArtist').textContent = artist;

        if (!isPlaying) {
            togglePlay();
        }
        progress = 0;
        updateProgressBar();
    }

    // Progress Bar
    let progressInterval;

    function startProgress() {
        progressInterval = setInterval(() => {
            progress += 0.5;
            if (progress >= 100) {
                progress = 0;
            }
            updateProgressBar();
        }, 225);
    }

    function stopProgress() {
        clearInterval(progressInterval);
    }

    function updateProgressBar() {
        document.getElementById('progressBar').style.width = progress + '%';
    }

    // Search Functionality
    document.getElementById('searchInput').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        console.log('Searching for:', searchTerm);
    });
}      

