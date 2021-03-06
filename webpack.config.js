const webpack = require('webpack');
const path = require('path');


let build = false;

process.argv.forEach((arg) => {
    const arg2 = arg.split('.')[1];

    if (arg2 === 'p' || arg2 === 'production') {
        build = true;
    }
});

module.exports = {
    context: __dirname,
    entry: build
        ? {
            './dist/bundle.min.js': './src/build.js',
        }
        // Entry point for demo app
        : {
            './dist/demo.js': './example/src/index.js',
        },

    mode: build ? 'production' : 'development',

    resolve: {
        extensions: ['.json', '.js', '.jsx', '.less'],
        alias: {
            'poster-ui-kit': path.resolve(__dirname, 'src/build.js'),
        },
    },
    output: {
        path: path.resolve(__dirname, './'),
        filename: '[name]',
        libraryTarget: build ? 'commonjs2' : undefined,
    },

    // Imports which should be excluded on build
    externals: build
        ? {
            react: 'react',
            'react-dom': 'ReactDOM',
        }
        : undefined,

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
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')(),
                            ],
                        },
                    },
                    { loader: 'less-loader' },
                ],
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                loader: 'url-loader',
            },
        ],
    },
};
