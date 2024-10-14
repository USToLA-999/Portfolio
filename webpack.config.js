module.exports = {
    // ... your existing configuration
    resolve: {
        fallback: {
          "zlib": require.resolve("browserify-zlib"),
          "path": require.resolve("path-browserify"),
          "crypto": require.resolve("crypto-browserify"),
          "fs": false,  // fs cannot be polyfilled in the browser
          "stream": require.resolve("stream-browserify"),
          "http": require.resolve("stream-http"),
          "querystring": require.resolve("querystring-es3"),
        }
      }
      
  };
  