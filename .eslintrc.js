module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  'extends': [
    'plugin:vue/vue3-recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "vue/html-self-closing": ["error", {
            "html": {
                //"always"...要求在没有其内容的元素上自关闭。
                //"never"...不允许自关闭。
                //"any"...不要强制使用自关闭样式。
                "void": "always",
                "normal": "any",
                "component": "any"
            },
            "svg": "always",
            "math": "always"
        }],
    'vue/singleline-html-element-content-newline': 'off',  //单行元素换行符
    'vue/multiline-html-element-content-newline': 'off',   //多行元素换行符

     //在rules中添加自定义规则
  //关闭组件命名规则
     "vue/multi-word-component-names":"off",
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}