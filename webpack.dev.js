const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();
const WorkerPlugin = require('worker-plugin');

module.exports = {
	mode: 'development',
	entry: {
		app: './src/index.tsx'
	},
	devtool: "inline-source-map",
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							["@babel/preset-env", {
								targets: {
									browsers: ["last 2 versions", "ie >= 11"]
								},
								useBuiltIns: "usage",
								corejs: 3,
								shippedProposals: true
							}]
						]
					}
				}
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					transpileOnly: true,
					experimentalWatchApi: true,
					getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
				},
			},
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: [{
					loader: 'source-map-loader',
					options: {
						enforce: 'pre',
						presets: [
							["@babel/preset-env", {
								"targets": {
									"browsers": ["last 2 versions", "ie >= 11"]
								},
								"useBuiltIns": "usage",
								"corejs": 3,
								"shippedProposals": true
							}],
							'@babel/preset-react']
					}
				}]
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader'],
			}
		]
	},

	plugins: [
		new webpack.ProgressPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new WorkerPlugin(),
		new HtmlWebpackPlugin(
			{
				template: path.resolve(__dirname, 'src', 'index.html')
			}),
		new BundleAnalyzerPlugin()
	],

	devServer: {
		headers: {
			"Access-Control-Allow-Origin": "*"
		},
		// port: 8080,
		open: true,
		host: process.env.DEV_SERVER_HOST || 'localhost',
		port: process.env.DEV_SERVER_PORT || 8081,
		contentBase: './dist',
		historyApiFallback: true
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js'],
	}
};
