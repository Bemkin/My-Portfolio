const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesToConvert = [
    'Screenshot 2025-01-12 181420.png',
    'Screenshot 2025-01-12 184843.png',
    'Screenshot 2025-01-12 181738.png',
    'Screenshot 2025-01-21 140027.png',
    'Screenshot 2025-01-12 220551.png',
    'AI Filters_image.png',
    'Screenshot 2024-12-15 184327.png'
];

const imagesDir = path.join(__dirname, 'public', 'images');

async function convertToWebP() {
    console.log('🖼️  Starting image conversion to WebP...\n');

    for (const imageName of imagesToConvert) {
        const inputPath = path.join(imagesDir, imageName);
        const outputPath = path.join(imagesDir, imageName.replace(/\.png$/i, '.webp'));

        if (!fs.existsSync(inputPath)) {
            console.log(`⚠️  Skipping ${imageName} - file not found`);
            continue;
        }

        try {
            const inputStats = fs.statSync(inputPath);
            const inputSizeKB = (inputStats.size / 1024).toFixed(2);

            await sharp(inputPath)
                .webp({ quality: 85 })
                .toFile(outputPath);

            const outputStats = fs.statSync(outputPath);
            const outputSizeKB = (outputStats.size / 1024).toFixed(2);
            const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

            console.log(`✅ ${imageName}`);
            console.log(`   ${inputSizeKB}KB → ${outputSizeKB}KB (${reduction}% reduction)\n`);
        } catch (error) {
            console.error(`❌ Error converting ${imageName}:`, error.message);
        }
    }

    console.log('✨ Conversion complete!');
}

convertToWebP().catch(console.error);
