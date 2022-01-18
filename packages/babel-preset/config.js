module.exports = {
  "env": {
    "coverage": {
      "plugins": ["istanbul"]
    }
  },
  "presets": [
    [
      "next/babel",
      {
        "preset-env": {
          "modules": "auto"
        },
        "preset-react": {
          "runtime": "automatic",
          "importSource": "@emotion/react"
        },
        "transform-runtime": {
          "absoluteRuntime": false,
          "corejs": "3",
          "helpers": true,
          "regenerator": true
        },
        "styled-jsx": {},
        "class-properties": {}
      }
    ]
  ],
  "plugins": [
    "@emotion/babel-plugin",
    "macros",
    [
      "module-resolver",
      {
        "root": [
          "./src"
        ],
        "alias": {
          "test": "./test"
        }
      }
    ]
  ]
}
