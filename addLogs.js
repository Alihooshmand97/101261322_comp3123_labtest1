const fs = require('fs');
const path = require('path');

// Directory path
const logsDir = path.join(__dirname, 'Logs');

// Create Logs directory and log files
function createLogs() {
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
        console.log('Logs directory created');
    }

    process.chdir(logsDir);
    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is log file ${i}`);
        console.log(`Created file: ${fileName}`);
    }
}

// Call the function
createLogs();
