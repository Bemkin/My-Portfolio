const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const distPath = path.join(__dirname, '../../dist');

// Create dist directory if it doesn't exist
if (!fs.existsSync(distPath)) {
    console.log('Creating dist directory...');
    fs.mkdirSync(distPath, { recursive: true });
} else {
    console.log('dist directory already exists.');
}

// Copy CSS folder
try {
    console.log('Copying CSS folder...');
    execSync(`cp -r ${path.join(__dirname, '../css')} ${distPath}`);
    console.log('CSS folder copied successfully.');
} catch (err) {
    console.error('Error copying CSS folder:', err);
}

// Copy images folder
try {
    console.log('Copying images folder...');
    execSync(`cp -r ${path.join(__dirname, '../images')} ${distPath}`);
    console.log('Images folder copied successfully.');
} catch (err) {
    console.error('Error copying images folder:', err);
}

// Copy index.html
try {
    console.log('Copying index.html...');
    fs.copyFileSync(path.join(__dirname, '../../index.html'), path.join(distPath, 'index.html'));
    console.log('index.html copied successfully.');
} catch (err) {
    console.error('Error copying index.html:', err);
}
