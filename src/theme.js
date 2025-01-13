import chalk from 'chalk';
import { setSetting, getSetting } from './settingsManager.js';

const themes = {
    dark: {
        primary: chalk.white,
        secondary: chalk.gray,
        success: chalk.green,
        error: chalk.red,
    },
    light: {
        primary: chalk.black,
        secondary: chalk.blue,
        success: chalk.greenBright,
        error: chalk.redBright,
    },
    neon: {
        primary: chalk.magentaBright,
        secondary: chalk.cyanBright,
        success: chalk.greenBright,
        error: chalk.redBright,
    },
};

// Store the current theme in a variable
let currentTheme = themes[getSetting('theme')] || themes.dark;

// Function to get the current theme dynamically
export function getTheme() {
    return currentTheme;
}

// Function to change the theme dynamically
export function changeTheme(themeName) {
    if (themes[themeName]) {
        setSetting('theme', themeName); // Save the theme to settings
        currentTheme = themes[themeName]; // Update the theme dynamically
        console.log(currentTheme.success(`Theme changed to ${themeName}`));
    } else {
        console.log(currentTheme.error('Invalid theme. Available themes: dark, light, neon'));
    }
}