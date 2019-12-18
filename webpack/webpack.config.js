const path = require("path");
const rimraf = require("rimraf");

rimraf("dist",()=>{});

const version=process.env.npm_package_version;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: `tabbar-hold@${version}.js`,
    path: path.resolve(__dirname, '../','dist'),
    library:'HoldTabbar',
    libraryTarget:'umd'
  },
  mode:"production",
  module: {
    rules: [
      {
        test: /\.js$/, 
        use: {
           loader: 'babel-loader', 
           options: {  
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 1%', 'last 2 version']
                        } 
                    }]
                    
                ] 
           }
        },
        exclude: '/node_module/'
    }
    ]
  }
};
