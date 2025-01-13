import fs from 'fs';
import archiver from 'archiver';
import unzipper from 'unzipper';

// Compress files into an archive
export function compressFiles(filePaths, outputPath) {
    const output = fs.createWriteStream(outputPath);
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', () => {
        console.log(`Archive created successfully. Total bytes: ${archive.pointer()}`);
    });

    archive.on('error', (err) => {
        console.error(`Error creating archive: ${err.message}`);
    });

    archive.pipe(output);

    filePaths.forEach((file) => {
        const trimmedFile = file.trim();
        if (fs.existsSync(trimmedFile)) {
            archive.file(trimmedFile, { name: path.basename(trimmedFile) });
        } else {
            console.error(`File does not exist: ${trimmedFile}`);
        }
    });

    archive.finalize();
}

// Extract files from an archive
export function extractArchive(archivePath, outputDir) {
    fs.createReadStream(archivePath)
        .pipe(unzipper.Extract({ path: outputDir }))
        .on('close', () => {
            console.log(`Extraction completed. Files are in: ${outputDir}`);
        })
        .on('error', (err) => {
            console.error(`Error extracting archive: ${err.message}`);
        });
}