css: {
  module.exports = {
    css: {
      loaderOptions: {
        less: {
          lessOptions: {
            // important extra layer for less-loader^6.0.0
            javascriptEnabled: true,
          },
        },
      },
    },
  };
}
