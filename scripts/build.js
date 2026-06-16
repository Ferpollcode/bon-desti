const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
process.chdir(root);

function copyFile(relativePath) {
  const source = path.join(root, relativePath);
  const target = path.join(dist, relativePath);
  if(!fs.existsSync(source)) return;
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
}

function copyDir(relativePath) {
  const source = path.join(root, relativePath);
  if(!fs.existsSync(source)) return;
  for(const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const child = path.join(relativePath, entry.name);
    if(entry.isDirectory()) copyDir(child);
    else copyFile(child);
  }
}

function copyNodeFile(sourceRelativePath, targetRelativePath) {
  const source = path.join(root, 'node_modules', sourceRelativePath);
  const target = path.join(dist, targetRelativePath);
  if(!fs.existsSync(source)) {
    throw new Error(`No existe dependencia: ${sourceRelativePath}`);
  }
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
}

function copyNodeDir(sourceRelativePath, targetRelativePath) {
  const source = path.join(root, 'node_modules', sourceRelativePath);
  const targetRoot = path.join(dist, targetRelativePath);
  if(!fs.existsSync(source)) {
    throw new Error(`No existe dependencia: ${sourceRelativePath}`);
  }
  for(const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const sourceChild = path.join(source, entry.name);
    const targetChild = path.join(targetRoot, entry.name);
    if(entry.isDirectory()) {
      copyNodeDir(path.join(sourceRelativePath, entry.name), path.join(targetRelativePath, entry.name));
    } else {
      fs.mkdirSync(path.dirname(targetChild), { recursive: true });
      fs.copyFileSync(sourceChild, targetChild);
    }
  }
}

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

copyFile('index.html');
copyFile('landing.html');
copyFile('manifest.webmanifest');
copyFile('service-worker.js');
copyDir('assets');
copyNodeFile('xlsx/dist/xlsx.full.min.js', 'assets/vendor/xlsx.full.min.js');
copyNodeDir('@tabler/icons-webfont/dist', 'assets/vendor/tabler-icons');
fs.mkdirSync(path.join(dist, 'assets/vendor'), { recursive: true });
fs.writeFileSync(path.join(dist, 'assets/vendor/qrcode.min.js'), 'window.QRCode=window.QRCode||{};\n');

console.log('Build generado en dist/');
