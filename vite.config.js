const path = require("path");

export default {
  root: path.resolve(__dirname, "src"),
  //   logLevel: "error",
  server: {
    port: 8080,
    hot: true,
    host: true,
    allowedHosts: true,
  },
  build: {
    // sourcemap: false,
  },
};
