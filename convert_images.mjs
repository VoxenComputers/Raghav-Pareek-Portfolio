
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, 'public', 'sequence');
const outputDir = inputDir; // Save in the same directory

if (!fs.existsSync(inputDir)) {
    console.error(`Input directory not found: ${inputDir}`);
    process.exit(1);
}

const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.png'));

console.log(`Found ${files.length} PNG files to convert.`);

async function convertImages() {
    for (const file of files) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, file.replace('.png', '.webp'));

        try {
            await sharp(inputPath)
                .webp({ quality: 80 }) // Adjust quality as needed
                .toFile(outputPath);
            console.log(`Converted: ${file} -> ${path.basename(outputPath)}`);

            // Optional: Delete original PNG file after conversion if desired
            // fs.unlinkSync(inputPath); 
        } catch (err) {
            console.error(`Error converting ${file}:`, err);
        }
    }
    console.log('Conversion complete!');
}

convertImages();
