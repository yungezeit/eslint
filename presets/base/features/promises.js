import pluginPromise from 'eslint-plugin-promise';

export default [
  pluginPromise.configs['flat/recommended'],
  {
    rules: {
      /** Enforce promises' arguments names. */
      'promise/param-names': [
        'error',
        { resolvePattern: '^_?res(olve)?$', rejectPattern: '^_?rej(ect)?$' },
      ],
    },
  },
];
