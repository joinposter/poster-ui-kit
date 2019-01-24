/* eslint-disable */
var webpack = require('webpack');
var path = require('path');
var build = process.env.NODE_ENV === 'production';

// Entry point for tests
var entry = {
    './dist/bundle.js': './src/demo.js',
};
/* eslint-enable */


process.argv.forEach((arg) => {
    arg = arg.split('.')[1];

    if (arg === 'p' || arg === 'production') {
        build = true;

        entry = {
            './dist/bundle.min.js': './src/build.js',
        };
    }
});

module.exports = {
    context: __dirname,
    entry: entry,

    resolve: {
        extensions: ['.json', '.js', '.jsx', '.less'],
        alias: {
            'poster-ui-kit': path.resolve(__dirname, 'src/export.js'),
        },
    },

    output: {
        path: path.resolve(__dirname, './'),
        filename: '[name]',
        libraryTarget: build ? 'commonjs2' : undefined,
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
    devtool: build ? undefined : 'eval',

    watch: !build,
    watchOptions: { aggregateTimeout: 100 },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader?cacheDirectory',
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                ],
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                },
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' },
                ],
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                loader: 'url-loader',
            },
        ],
    },

    plugins: [],
};

if (build) {
    module.exports.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
    );
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unsafe: true,
                warnings: false,
            },
            sourceMap: true,
        }),
    );
}
