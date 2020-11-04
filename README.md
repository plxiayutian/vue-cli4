# vue
vue-cli4

- `vue 2.6.12`
- `vue-cli 4`
- `less、scss`

##多页引用配置参考:
[](https://www.z01.com/blog/products/3512.shtml)
[](https://www.cnblogs.com/HYZhou2018/p/10419703.html)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 引入sass或less
## less
npm install less --save-dev  
npm install less-loader --save-dev  
## sass
npm install node-sass --save-dev  
npm install sass-loader --save-dev  

##使用注意：是scss不是sass
#<style  lang="scss" scoped></style>
#<style  lang="less" scoped></style>

##为什么使用scss不使用sass？
1.scss是sass的升级版本，写法略有不同，但功能差不多
2.sass不支持大括号和分号，也就是说，不兼容css3的写法，scss支持

##说明：
Sass 和 Scss 其实是同一种东西，我们平时都称之为 Sass，两者之间不同之处有以下两点：
a、文件扩展名不同，Sass 是以“.sass”后缀为扩展名， SCSS 是以“.scss”后缀为扩展名
b、语法书写方式不同，Sass 是以严格的缩进式语法规则来书写，不带大括号({})和分号。
SCSS 的语法书写和我们的 CSS 语法书写方式非常类似。简单点说，把你现有的“.css”文件直接修改成“.scss”即可使用。