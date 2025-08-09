const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const logoPath = path.join(__dirname, 'public', 'images', 'logo.png');
const iconsDir = path.join(__dirname, 'public', 'icons');
const ogDir = path.join(__dirname, 'public', 'og');

// Ensure directories exist
fs.mkdirSync(iconsDir, { recursive: true });
fs.mkdirSync(ogDir, { recursive: true });

async function generateFavicons() {
  console.log('Generating favicons...');
  try {
    await sharp(logoPath)
      .resize(180, 180)
      .toFile(path.join(iconsDir, 'apple-touch-icon.png'));
    console.log('apple-touch-icon.png generated.');

    await sharp(logoPath)
      .resize(32, 32)
      .toFile(path.join(iconsDir, 'favicon-32x32.png'));
    console.log('favicon-32x32.png generated.');

    await sharp(logoPath)
      .resize(16, 16)
      .toFile(path.join(iconsDir, 'favicon-16x16.png'));
    console.log('favicon-16x16.png generated.');

    // Create webmanifest (basic)
    const webmanifestContent = `{
      "name": "Thinking About Thinking",
      "short_name": "ThAT",
      "icons": [
        {
          "src": "/icons/android-chrome-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "/icons/android-chrome-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ],
      "theme_color": "#0A2740",
      "background_color": "#FFFFFF",
      "display": "standalone"
    }`;
    fs.writeFileSync(path.join(iconsDir, 'site.webmanifest'), webmanifestContent);
    console.log('site.webmanifest generated.');

    // Generate android-chrome icons (optional, but good practice)
    await sharp(logoPath)
      .resize(192, 192)
      .toFile(path.join(iconsDir, 'android-chrome-192x192.png'));
    await sharp(logoPath)
      .resize(512, 512)
      .toFile(path.join(iconsDir, 'android-chrome-512x512.png'));

    console.log('Favicons generation complete.');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

async function generateOgImage() {
  console.log('Generating OG image...');
  try {
    const tagline = "Neuroscience, memory, and longevity—explained clearly.";
    
    // Pre-resize logo to ensure it's not larger than expected
    const logoBuffer = await sharp(logoPath).resize(300, 300, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();

    await sharp({
      create: {
        width: 1200,
        height: 630,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      }
    })
    .composite([
      {
        input: logoBuffer,
        gravity: 'west',
        left: 100, 
        top: 150, 
        // No width/height here, as it's already pre-resized
      },
      {
        input: Buffer.from(
          `<svg width="700" height="500">
            <style>
              .title { font-family: sans-serif; font-size: 48px; font-weight: bold; fill: #0F172A; }
              .tagline { font-family: sans-serif; font-size: 30px; fill: #0F172A; }
            </style>
            <text x="350" y="200" text-anchor="middle" class="title">Thinking About Thinking</text>
            <text x="350" y="270" text-anchor="middle" class="tagline">${tagline}</text>
          </svg>`
        ),
        left: 400, 
        top: 0,
      }
    ])
    .toFile(path.join(ogDir, 'og-default.png'));
    console.log('og-default.png generated.');
  } catch (error) {
    console.error('Error generating OG image:', error);
  }
}

async function main() {
  await generateFavicons();
  await generateOgImage();
}

main();