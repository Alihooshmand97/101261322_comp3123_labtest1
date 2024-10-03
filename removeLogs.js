const fs = require('fs');
const path = require('path');

// Directory path
const logsDir = path.join(__dirname, 'Logs');

// Remove all log files and directory
function removeLogs() {
    if (fs.existsSync(logsDir)) {
        fs.readdirSync(logsDir).forEach(file => {
            console.log(`Deleting file: ${file}`);
            fs.unlinkSync(path.join(logsDir, file));
        });
        fs.rmdirSync(logsDir);
        console.log('Logs directory deleted');
    } else {
        console.log('Logs directory does not exist');
    }
}

// Call the function
removeLogs();
