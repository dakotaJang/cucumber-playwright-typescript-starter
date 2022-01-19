module.exports = {
  default: [
    '--publish-quiet',
    '--require-module ts-node/register',
    '--require "src/**/*.ts"',
    '--parallel 3',
    'features'
  ].join(' ')
}