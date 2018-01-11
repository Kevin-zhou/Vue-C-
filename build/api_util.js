
const fs = require('fs');

const ip = require('../config/ip.json').ip;
const mallIp = require('../config/ip.json').mall;
// const prodBaseUrl = 'const baseUrl= "";';
const prodBaseUrl = `const baseUrl= "${ip}";`;
const prodMallUrl = `const mallUrl= "";`;
const devBaseUrl = `const baseUrl= "${ip}";`;
const devMallUrl = `const mallUrl= "${mallIp}";`;

const destPath = './src/config/api.js';

function replaceIpByEnv() {
    if (process.env.NODE_ENV == "production") {
        replaceProdContent();
    } else {
        replaceDevContent();
    }
}

async function replaceProdContent() {
    let content = await fs.readFileSync(destPath, "UTF-8");
    content = content.replace(/const.*baseUrl.*\;/g, prodBaseUrl);
    content = content.replace(/const.*mallUrl.*\;/g, prodMallUrl);
    fs.writeFileSync(destPath, content)
}

async function replaceDevContent() {
    let content = await fs.readFileSync(destPath, "UTF-8");
    content = content.replace(/const.*baseUrl.*\;/g, devBaseUrl);
    content = content.replace(/const.*mallUrl.*\;/g, devMallUrl);
    fs.writeFileSync(destPath, content)
}

module.exports = replaceIpByEnv;
