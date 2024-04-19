const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // Les règles de chargement des fichiers JavaScript et JSX restent les mêmes
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      // Les règles de chargement des fichiers CSS restent les mêmes
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // Les règles de chargement des fichiers statiques restent les mêmes
      {
        test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/'
        }
      }
    ]
  },
  plugins: [
    // Le plugin HtmlWebpackPlugin reste le même
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
    // Ajoutez d'autres plugins webpack selon vos besoins
  ],
  // Configuration spécifique au serveur de développement
  devServer: {
    port: 4006
  },
  // Configuration spécifique à la production
  mode: 'production', // Changez en 'development' pour le mode de développement
  optimization: {
    minimize: true, // Active la minimisation du code
    splitChunks: {
      chunks: 'all' // Active le code splitting
    }
  },
  resolve: {
    alias: {
      // Configuration des alias pour les chemins d'importation simplifiés
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles')
      // Ajoutez d'autres alias selon vos besoins
    }
  }
};
