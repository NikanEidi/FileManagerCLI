import readline from 'readline';
import { listFiles } from './directoryOperations.js';
import { fileAnalyzer, previewFile } from './fileOperations.js';
import { searchFile, searchBySize } from './searchOperations.js';
import { copyFile, moveFile, deleteFileOrDir } from './fileManipulation.js';
import { addFavoriteDirectory, listFavoriteDirectories } from './favoriteDirectories.js';
import { compressFiles, extractArchive } from './fileCompression.js';
import { viewLogs } from './logger.js';
import { getTheme, changeTheme } from './theme.js';

let theme = getTheme(); // Dynamic theme reference
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export function menu() {
    console.log(theme.primary(`
        Choose an option:
        1. List files and directories
        2. Search for a file
        3. Copy a file
        4. Move a file
        5. Delete a file or directory
        6. Analyze a file
        7. Preview a file
        8. Add favorite directory
        9. List favorite directories
        10. Compress files
        11. Extract archive
        12. View logs
        13. Change theme
        14. Exit
    `));

    rl.question(theme.secondary('Enter your choice: '), (choice) => {
        handleChoice(choice.trim());
    });
}

function handleChoice(choice) {
    switch (choice) {
        case '1':
            rl.question('Enter the directory path: ', (dirPath) => {
                listFiles(dirPath);
                setTimeout(menu, 500);
            });
            break;
        case '2':
            rl.question('Enter the directory path: ', (dirPath) => {
                rl.question('Enter the file name to search: ', (fileName) => {
                    searchFile(dirPath, fileName);
                    setTimeout(menu, 500);
                });
            });
            break;
        case '3':
            rl.question('Enter the source file path: ', (source) => {
                rl.question('Enter the destination path: ', (destination) => {
                    copyFile(source, destination);
                    setTimeout(menu, 500);
                });
            });
            break;
        case '4':
            rl.question('Enter the source file path: ', (source) => {
                rl.question('Enter the destination path: ', (destination) => {
                    moveFile(source, destination);
                    setTimeout(menu, 500);
                });
            });
            break;
        case '5':
            rl.question('Enter the file or directory path to delete: ', (path) => {
                deleteFileOrDir(path);
                setTimeout(menu, 500);
            });
            break;
        case '6':
            rl.question('Enter the file path: ', (filePath) => {
                fileAnalyzer(filePath);
                setTimeout(menu, 500);
            });
            break;
        case '7':
            rl.question('Enter the file path to preview: ', (filePath) => {
                previewFile(filePath);
                setTimeout(menu, 500);
            });
            break;
        case '8':
            rl.question('Enter the directory path to add to favorites: ', (dirPath) => {
                addFavoriteDirectory(dirPath);
                setTimeout(menu, 500);
            });
            break;
        case '9':
            listFavoriteDirectories();
            setTimeout(menu, 500);
            break;
        case '10':
            rl.question('Enter files to compress (comma-separated): ', (files) => {
                rl.question('Enter the output archive path: ', (outputPath) => {
                    compressFiles(files.split(','), outputPath.trim());
                    setTimeout(menu, 500);
                });
            });
            break;
        case '11':
            rl.question('Enter the archive path: ', (archivePath) => {
                rl.question('Enter the extraction directory: ', (outputDir) => {
                    extractArchive(archivePath.trim(), outputDir.trim());
                    setTimeout(menu, 500);
                });
            });
            break;
        case '12':
            viewLogs();
            setTimeout(menu, 500);
            break;
        case '13':
            rl.question('Enter theme (dark, light, neon): ', (themeName) => {
                changeTheme(themeName.trim());
                theme = getTheme(); // Update theme dynamically
                menu(); // Redisplay menu with updated theme
            });
            break;
        case '14':
            console.log(theme.success('Goodbye!'));
            rl.close();
            break;
        default:
            console.log(theme.error('Invalid choice. Please try again.'));
            menu();
    }
}