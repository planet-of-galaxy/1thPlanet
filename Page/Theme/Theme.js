function createThemeItem(theme) {
    const item = document.createElement('div');
    item.className = 'theme-item';
    item.innerHTML = `
        <img src="../../Themes/${theme.name}/picture.webp" alt="${theme.name}">
        <p>${theme.name}</p>
    `;
    return item;
}

function displayCurrentTheme(themeName, themes) {
    const currentContainer = document.getElementById('current-theme');
    currentContainer.innerHTML = '';
    const theme = themes.find(t => t.name === themeName);
    if (theme) {
        currentContainer.appendChild(createThemeItem(theme));
    }
}

fetch('Themes.json')
    .then(res => res.json())
    .then(themes => {
        const container = document.getElementById('theme-container');
        const savedTheme = localStorage.getItem('selectedTheme') || '废弃都市';

        displayCurrentTheme(savedTheme, themes);

        themes.forEach(theme => {
            const item = createThemeItem(theme);
            item.onclick = () => {
                localStorage.setItem('selectedTheme', theme.name);
                displayCurrentTheme(theme.name, themes);
            };
            container.appendChild(item);
        });
    });
