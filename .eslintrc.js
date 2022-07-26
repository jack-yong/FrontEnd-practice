// eslint-disable-next-line no-undef
module.exports = {
    root: true,
    // 指定脚本的运行环境， env 关键字指定你想启用的环境，并设置它们为 true
    "env": {
        "browser": true,
        "es2021": true,
        node: true,
    },
    // 扩展配置文件（设置当前ESLint默认继承的规则（或者你也可以使用标准规则：standard））
    // 一个配置文件一旦扩展，就可以继承另一个配置文件的所有特征（包括规则、插件和语言选项）、并修改所有选项
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    // 解析器选项。sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    // 使用的插件，插件名称省略了eslint-plugin-
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    }
}
