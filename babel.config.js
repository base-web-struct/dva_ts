module.exports = function (api) {
    api.cache(true);
  
    return {
      "presets": [
        [ '@babel/preset-typescript' ],
        [ "@babel/react" ],
        [ "@babel/env" ]
      ],
      "plugins": [
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-proposal-class-properties",
        ['import', { "libraryName": "antd" }]
      ]
    }
  }
  