import fs from 'fs';

const logFilePath = './logs.txt';

export function viewLogs() {
    if (!fs.existsSync(logFilePath)) {
        console.log('No logs found.');
        return;
    }

    const logs = fs.readFileSync(logFilePath, 'utf-8');
    console.log('Logs:');
    console.log(logs);
}

export function addLog(message) {
    const timestamp = new Date().toISOString();
    const logEntry = `${timestamp} - ${message}\n`;

    fs.appendFileSync(logFilePath, logEntry);
}