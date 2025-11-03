module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js',
      'src/**/*.ts',
    ],

    tests: ['tests/**/*.test.ts'],

    env: {
      type: 'node'
    },

    testFramework: 'mocha'
  };
};
