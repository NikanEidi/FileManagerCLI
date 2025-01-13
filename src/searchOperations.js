import fs from 'fs';
import path from 'path';
import { getTheme, changeTheme } from './theme.js';

export function searchFile(dirPath, fileName, recursive = false) {
    const theme = getTheme();
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            console.error(theme.error(`Error reading directory: ${err.message}`));
            return;
        }

        files.forEach((file) => {
            const filePath = path.join(dirPath, file);
            fs.stat(filePath, (err, stats) => {
                if (err) return;
                if (stats.isDirectory() && recursive) {
                    searchFile(filePath, fileName, recursive);
                } else if (file === fileName) {
                    console.log(theme.success(`File found: ${filePath}`));
                }
            });
        });
    });
}

export function searchBySize(dirPath, minSize, maxSize) {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            console.error(`Error reading directory: ${err.message}`);
            return;
        }

        console.log(`Files in ${dirPath} within size range ${minSize}-${maxSize} bytes:`);
        files.forEach((file) => {
            const filePath = path.join(dirPath, file);
            const stats = fs.statSync(filePath);

            if (stats.size >= minSize && stats.size <= maxSize) {
                console.log(`- ${file} (${stats.size} bytes)`);
            }
        });
    });
}