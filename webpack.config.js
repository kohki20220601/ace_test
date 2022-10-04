// [定数] webpack の出力オプションを指定します
// 'production' か 'development' を指定
const MODE = "development";

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

module.exports = {
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: `./docs/src/index.ts`,

    // ファイルの出力設定
    output: {
        //  出力ファイルのディレクトリ名
        path: `${__dirname}/docs/dist`,
        // 出力ファイル名
        filename: "main.js"
    },

    // 開発環境用：    
        // mode:'development'
    // 本番環境用：    
        // mode:'production'
    mode:MODE,

    module: {
        rules: [
            {
                // 拡張子 .ts の場合
                test: /\.ts$/,
                // TypeScript をコンパイルする
                use: 'ts-loader',
            },
            {
                test: /\.css/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: { url: false }
                    }
                ]
            },
            {
                test: /\.scss/, // 対象となるファイルの拡張子
                // ローダー名
                use: [
                  // linkタグに出力する機能
                    "style-loader",
                  // CSSをバンドルするための機能
                    {
                    loader: "css-loader",
                    options: {
                        // オプションでCSS内のurl()メソッドを取り込む
                        url: true,
                        // ソースマップの利用有無
                        sourceMap: enabledSourceMap,
        
                        // 0 => no loaders (default);
                        // 1 => postcss-loader;
                        // 2 => postcss-loader, sass-loader
                        importLoaders: 2,
                    },
                },
                  // Sassをバンドルするための機能
                {
                    loader: "sass-loader",
                    options: {
                      // ソースマップの利用有無
                    sourceMap: enabledSourceMap,
                    },
                },
                ],
            },
            {
                // 対象となるファイルの拡張子
                test: /\.(gif|png|jpg|svg)$/,
                // 画像をBase64として取り込む
                type: "asset/inline",
            },
        ],
    },

    target: ["web", "es5"],

    resolve: {
        // 拡張子を配列で指定
        extensions: [
            '.ts', '.js',
        ],
    },

    devServer: {
        static: "docs/",
        open: true
    }
};