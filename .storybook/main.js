module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  webpackFinal: async config => {




    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [
          ["react-app", {
            flow: false,
            typescript: true
          }]
        ]
      }
    });
    config.resolve.extensions.push(".ts", ".tsx");

    config.module.rules = config.module.rules.filter(
      rule => rule.test.toString() !== '/\\.css$/'
    );

    config.module.rules.push({
      test: /\.css$/,
      use: [{
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]-[local]_[hash:base64:5]',
            importLoaders: 1,
          },
        },
        {
          loader: 'postcss-loader',
        },
      ],
    });

    return config;
  }
};