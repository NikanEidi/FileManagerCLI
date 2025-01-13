import fs from 'fs';

// Function to analyze a file
export function fileAnalyzer(filePath) {
    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.error(`Error analyzing file: ${err.message}`);
        } else {
            console.log(`File Analysis:
    Size: ${stats.size} bytes
    Created: ${stats.birthtime}
    Modified: ${stats.mtime}`);
        }
    });
}

// Function to preview the content of a file
export function previewFile(filePath) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err.message}`);
        } else {
            console.log(`File Content:
    ${data}`);
        }
    });
}