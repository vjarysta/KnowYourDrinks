module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  globals: { fetch: false },
  rules: {
    'no-use-before-define': ['error', { variables: false }],
    'react/prop-types': ['error', { ignore: ['navigation'] }],
    // `.jsx` extension cannot be used with React Native
    // https://github.com/airbnb/javascript/issues/982
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
  }
};