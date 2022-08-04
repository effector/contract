module.exports = function () {
  return {
    plugins: [
      [
        'effector/babel-plugin',
        {
          noDefaults: true,
          factories: ['@effector/contract'],
        },
        'effector-contract',
      ],
    ],
  };
};
