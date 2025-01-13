import fs from 'fs';
import path from 'path';

// Function to list all files and directories in a given directory
export function listFiles(directoryPath) {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error(`Error reading directory: ${err.message}`);
        } else {
            console.log(`Contents of ${directoryPath}:`);
            files.forEach((file) => {
                const filePath = path.join(directoryPath, file);
                fs.stat(filePath, (err, stats) => {
                    if (err) {
                        console.error(`Error accessing file: ${err.message}`);
                    } else if (stats.isDirectory()) {
                        console.log(`[DIR] ${file}`);
                    } else {
                        console.log(`[FILE] ${file}`);
                    }
                });
            });
        }
    });
}