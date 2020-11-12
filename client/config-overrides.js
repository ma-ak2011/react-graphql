module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack(config, env) {
    return config;
  },
  // The Jest config to use when running your jest tests - note that the normal rewires do not
  // work here.
  jest(config) {
    return config;
  },
  // The function to use to create a webpack dev server configuration when running the development
  // server with 'npm run start' or 'yarn start'.
  // Example: set the dev server to use a specific certificate in https.
  devServer(configFunction) {
    // Return the replacement function for create-react-app to use to generate the Webpack
    // Development Server config. "configFunction" is the function that would normally have
    // been used to generate the Webpack Development server config - you can use it to create
    // a starting configuration to then modify instead of having to create a config from scratch.
    return function (proxy, allowedHost) {
      // デフォルト設定の開発サーバーを作成する
      const config = configFunction(proxy, allowedHost);

      // この辺でカスタマイズする

      return config;
    };
  },
  // The paths config to use when compiling your react app for development or production.
  paths(paths, env) {
    // ...add your paths config
    return paths;
  },
};
