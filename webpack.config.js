import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
    entry: './src/main.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        },
    module: {
        rules: [
            {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: { 
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            }
            },
            {
            test: /\.html$/,
            use: 'html-loader',
            },
        ],
        },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        ],
    resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
    stats: {
            children: true,
    }
};

export default config;
