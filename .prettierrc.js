module.exports = {
 "extends": [
 "airbnb",
 "prettier",
 "prettier/react"
 ],
 "singleQuote": true, // 使用单引号
 "printWidth": 80, // 超过最大值换行
 "htmlWhitespaceSensitivity": "ignore",
 "semi": false, // 结尾不用分号
 "disableLanguages": ["vue"], // 不格式化vue文件，vue文件的格式化单独设置
 "trailingComma": "none", // 函数最后不需要逗号
 "endOfLine": "auto"
};