module.exports = {
  "files": [
    "test/**/*Test.js",
    "!test/**/*Util.js",
    "!test/**/*Page.js"
  ],
  "babel": {
    "testOptions": {
      "babelrc": true,
      "configFile": false
    }
  },
  "require": [
    "@babel/register"
  ],
  "snapshotDir": "test/snapshots",
  "concurrency": 64,
  "failFast": true,
  "failWithoutAssertions": false,
  "verbose": true,
  "nodeArguments": [
    "--trace-deprecation"
  ]
}
