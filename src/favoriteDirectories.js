// favoriteDirectories.js

import fs from 'fs';

const favoritesPath = './favorites.json';

// Add a directory to the favorites
export function addFavoriteDirectory(dirPath) {
    let favorites = [];
    if (fs.existsSync(favoritesPath)) {
        favorites = JSON.parse(fs.readFileSync(favoritesPath, 'utf-8'));
    }

    if (!favorites.includes(dirPath)) {
        favorites.push(dirPath);
        fs.writeFileSync(favoritesPath, JSON.stringify(favorites, null, 2));
        console.log(`Added to favorites: ${dirPath}`);
    } else {
        console.log(`Directory is already in favorites: ${dirPath}`);
    }
}

// List favorite directories
export function listFavoriteDirectories() {
    if (fs.existsSync(favoritesPath)) {
        const favorites = JSON.parse(fs.readFileSync(favoritesPath, 'utf-8'));
        console.log('Favorite directories:');
        favorites.forEach((dir, index) => {
            console.log(`${index + 1}. ${dir}`);
        });
    } else {
        console.log('No favorite directories found.');
    }
}