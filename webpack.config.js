var webpack = require("webpack");

module.exports = {
  entry: {
    'uc-numero-alumno': './index.js',
  },
  output: {
    libraryTarget: 'var',
    library: 'validUCnumber', // to access it on AMD
    path: './dist',
    filename: '[name].js',
  },
};
