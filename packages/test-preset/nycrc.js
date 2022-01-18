module.exports = {
  "extends": "@istanbuljs/nyc-config-babel",
  "skip-full": true,
  "reporter": ["lcov", "text-summary"],
  "include": ["src/**/*.js"],
  "exclude": ["test/**/*.js"],
  "excludeNodeModules": true
}
