// function for navigation bar -- DO THIS FIRST or buttons and their event listeners won't be recognized 
/*document.getElementById('header-container').innerHTML = `
<header class="navbar">
    <div class="title-section">
        <i class="fa-solid fa-seedling"></i>
        <h1>grace nicole <span class="subtitle"></span></h1>
    </div>
    <div class="nav-buttons">
        <button class="aboutme">about me</button> 
        <button class="mytimeline">my timeline</button>
        <button class="currentprojects">current projects</button>
    </div>
</header>
`;*/

function setScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.style.display = 'none');

    // Show the selected screen
    document.getElementById(screenId).style.display = 'block';
}

// event listener for all about me buttons to take you to aboutme page
document.querySelectorAll('.aboutme').forEach(btn => {
    btn.addEventListener('click', () => {
        window.location.hash = 'about';
        setScreen('about');
    });
});

/*
// event listener for all resume buttons to take you to resume page
document.querySelectorAll('.resume').forEach(btn => {
    btn.addEventListener('click', () => {
        window.location.hash = 'resume';
        setScreen('resume');
    });
});*/

// event listener for all mytimeline buttons to take you to timeline page
document.querySelectorAll('.mytimeline').forEach(btn => {
    btn.addEventListener('click', () => { 
        window.location.hash = 'timelinepage';
        setScreen('timelinepage');
    });
});

// event listener for all current projects buttons to take you to projects page
document.querySelectorAll('.currentprojects').forEach(btn => {
    btn.addEventListener('click', () => {
        window.location.hash = 'projects';
        setScreen('projects')
    });
});

window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1); // removes the '#'
    setScreen(hash || 'about'); // Default to 'about' if hash is empty
});

