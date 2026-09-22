import fs from 'fs';
import path from 'path';
import axios from 'axios';

const ASSETS_DIR = path.join(process.cwd(), 'public/assets');
const DATA_DIR = path.join(process.cwd(), 'src/data');

async function downloadImage(url: string, filename: string) {
    const filePath = path.join(ASSETS_DIR, `${filename}.png`);
    if (fs.existsSync(filePath)) return;

    try {
        const response = await axios({
            url,
            method: 'GET',
            responseType: 'stream',
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        const writer = fs.createWriteStream(filePath);
        response.data.pipe(writer);
        return new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });
    } catch (error) {
        console.error(`Failed to download ${url}: ${error}`);
    }
}

async function run() {
    const files = ['avatars.json', 'weapons.json', 'artifacts.json'];
    for (const file of files) {
        const data = JSON.parse(fs.readFileSync(path.join(DATA_DIR, file), 'utf-8'));
        for (const item of data) {
            if (item.icon && item.filename) {
                await downloadImage(item.icon, item.filename);
            }
        }
    }
}

run();
