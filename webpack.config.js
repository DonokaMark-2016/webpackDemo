const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
  	rules:[
	  	{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
	  	}
  	]
  }
};

//使用配置文件进行构建npx webpack --config webpack.config.js