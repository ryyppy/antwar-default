const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require("webpack-merge");

// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
//
// https://github.com/FullHuman/purgecss#extractor
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = env => {
  switch (env) {
    case "build":
      return merge(commonConfig(), buildConfig());
    case "interactive":
      return merge(commonConfig(), interactiveConfig());
    case "start":
    default:
      return merge(commonConfig(), developmentConfig());
  }
};

function commonConfig() {
  return {
    stats: "minimal",
    module: {
      rules: [
        {
          test: /(\.bs|re\.)?\.js$/,
          use: "babel-loader",
          include: [
            path.join(__dirname, "components"),
            path.join(__dirname, "layouts"),
            path.join(__dirname, "pages"),
            path.join(__dirname, "data")
          ]
        },
        {
          test: /\.woff(2)?|\.ttf$|\.eot$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 5000
              }
            }
          ]
        },
        {
          test: /\.gif$/,
          use: "file-loader"
        },
        {
          test: /\.jpg$/,
          use: "file-loader"
        },
        {
          test: /\.png$/,
          use: "file-loader"
        },
        {
          test: /\.svg$/,
          use: "file-loader"
        },
        {
          test: /\.txt$/,
          use: "raw-loader"
        },
        {
          test: /.mdx?$/,
          use: ["babel-loader", "@mdx-js/loader"]
        },
        {
          test: /\.md$/,
          use: "raw-loader"
        },
        {
          // Prevent webpack from interpreting Reason files
          test: /.re$/,
          loader: "./scripts/ignore-loader"
        }
      ]
    },
    resolve: {
      alias: {
        assets: path.resolve(__dirname, "assets"),
        config: path.resolve(__dirname, "antwar.config.js"),
        components: path.resolve(__dirname, "components"),
        utils: path.resolve(__dirname, "utils")
      }
    }
  };
}

function interactiveConfig() {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include: [path.resolve(__dirname, "styles")],
          use: ExtractTextPlugin.extract({
            use: ["css-loader", "postcss-loader"],
            fallback: "style-loader"
          })
        }
      ],
    },
    // resolve: {
    //   alias: {
    //     react: "preact-compat/dist/preact-compat.min.js",
    //     "react-dom": "preact-compat/dist/preact-compat.min.js"
    //   }
    // },
    plugins: [
      new ExtractTextPlugin({
        filename: "[name].[chunkhash].css",
        allChunks: true
      })
    ]
  };
}

function developmentConfig() {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include: [path.resolve(__dirname, "styles")],
          use: ["style-loader", "css-loader", "postcss-loader"]
        }
      ]
    }
  };
}

function buildConfig() {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include: [path.resolve(__dirname, "styles")],
          use: ExtractTextPlugin.extract({
            use: ["css-loader", "postcss-loader"],
            fallback: "style-loader"
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: "[name].[chunkhash].css",
        allChunks: true
      }),
      //new webpack.DefinePlugin({
        //window: `false`
      //})
    ]
  };
}
