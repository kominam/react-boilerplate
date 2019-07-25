import path from 'path';

export default {
  root: path.resolve(__dirname, '../', '../'),
  outputPath: path.resolve(__dirname, '../', '../', 'build'),
  entryPath: path.resolve(__dirname, '../', '../', 'src/index.js'),
  templatePath: path.resolve(__dirname, '../', '../', 'src/index.html'),
  componentFolder: path.resolve(__dirname, '../', '../', 'src/components'),
  pageFolder: path.resolve(__dirname, '../', '../', 'src/containers/pages'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js'
};
