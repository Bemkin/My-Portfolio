const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const contentDir = path.join(process.cwd(), 'src/content');

function validateDir(dirName) {
    const dir = path.join(contentDir, dirName);
    if (!fs.existsSync(dir)) return;

    console.log(`Validating ${dirName}...`);
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx'));

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        try {
            matter(content);
            console.log(`✅ ${file} is valid`);
        } catch (e) {
            console.error(`❌ ${file} has error: ${e.message}`);
        }
    });
}

validateDir('projects');
validateDir('blog');
