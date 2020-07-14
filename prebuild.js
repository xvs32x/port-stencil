const sharp = require('sharp');
const { lstatSync, readdirSync } = require('fs')
const { join } = require('path')

const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory)

const directory = './src/assets/port-items';

getDirectories(directory).forEach(dir => {
  readdirSync(dir)
    .filter(file => file.search('medium') === -1 && file.search('small') === -1)
    .forEach(file => {
      sharp(`${dir}/${file}`)
        .jpeg({quality: 100})
        .resize(1800) // width, height
        .toFile(`${dir}/${file.split('.')[0]}-medium.jpg`);
      sharp(`${dir}/${file}`)
        .resize(480) // width, height
        .toFile(`${dir}/${file.split('.')[0]}-small.jpg`);
  });
})
