import fs from 'fs';
import path from 'path';

// Function to copy a file
export function copyFile(source, destination) {
    fs.copyFile(source, destination, (err) => {
        if (err) {
            console.error(`Error copying file: ${err.message}`);
        } else {
            console.log(`File copied from ${source} to ${destination}`);
        }
    });
}

// Function to move a file
export function moveFile(source, destination) {
    fs.stat(destination, (err, stats) => {
        if (!err && stats.isDirectory()) {
            const fileName = path.basename(source);
            destination = path.join(destination, fileName);
        }

        fs.rename(source, destination, (err) => {
            if (err) {
                console.error(`Error moving file: ${err.message}`);
            } else {
                console.log(`File moved from ${source} to ${destination}`);
            }
        });
    });
}

// Function to delete a file or directory
export function deleteFileOrDir(targetPath) {
    fs.stat(targetPath, (err, stats) => {
        if (err) {
            console.error(`Error accessing path: ${err.message}`);
            return;
        }

        if (stats.isDirectory()) {
            fs.rmdir(targetPath, { recursive: true }, (err) => {
                if (err) {
                    console.error(`Error deleting directory: ${err.message}`);
                } else {
                    console.log(`Directory deleted: ${targetPath}`);
                }
            });
        } else {
            fs.unlink(targetPath, (err) => {
                if (err) {
                    console.error(`Error deleting file: ${err.message}`);
                } else {
                    console.log(`File deleted: ${targetPath}`);
                }
            });
        }
    });
}