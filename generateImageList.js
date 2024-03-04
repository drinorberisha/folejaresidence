const fs = require('fs');
const path = require('path');

const imagesDirectory = path.join(__dirname, 'public', 'foto');
const outputPath = path.join(__dirname, 'imagePaths.json');

// This function recursively reads a directory and returns all file paths
function readDirectoryRecursively(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      readDirectoryRecursively(filePath, fileList);
    } else {
      // Assuming you want to make the path relative to the 'public' directory
      fileList.push(filePath.replace(__dirname + '/public', ''));
    }
  });

  return fileList;
}

const imagePaths = readDirectoryRecursively(imagesDirectory);

// Write the list of image paths to a JSON file
fs.writeFileSync(outputPath, JSON.stringify(imagePaths), 'utf8');

console.log(`Generated image paths list at ${outputPath}`);
