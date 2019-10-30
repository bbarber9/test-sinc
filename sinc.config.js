module.exports = {
  sourceDirectory: "src",
  rules: [
    {
      match: /\.sn\.js$/,
      plugins: [
        {
          name: "@sincronia/babel-plugin",
          options: {
            presets: [
              "@sincronia/servicenow",
              ["@babel/env", { useBuiltIns: "entry", targets: { ie: "10" }, corejs: { version: 3 } }]
            ],
            plugins: ["@sincronia/remove-modules"]
          }
        }
      ]
    },
    {
      match: /\.ts$/,
      plugins: [
        {
          name: "@sincronia/typescript-plugin",
          options: {}
        }
      ]
    }
  ],
  excludes: {},
  includes: {}
};
