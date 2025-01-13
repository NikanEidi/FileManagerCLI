import fs from 'fs';

const settingsPath = './settings.json';

export function getSetting(key) {
    if (fs.existsSync(settingsPath)) {
        const settings = JSON.parse(fs.readFileSync(settingsPath, 'utf-8'));
        return settings[key];
    }
    return null; // Return null if settings file or key doesn't exist
}

export function setSetting(key, value) {
    let settings = {};
    if (fs.existsSync(settingsPath)) {
        settings = JSON.parse(fs.readFileSync(settingsPath, 'utf-8'));
    }
    settings[key] = value;
    fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
}