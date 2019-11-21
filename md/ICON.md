# Icon 图标  
#### 前置工作  
本组件用的是svg-icon使用形式，因此需要做一些配置。  
+ ###### 什么是svg？   
  ~~自己百度~~  
+ ###### 为啥要用svg？   

  - 支持多色图标了，不再受单色限制。
  - 支持像字体那样通过font-size,color来调整样式。
  - 支持 ie9+
  - 可利用CSS实现动画。
  - 减少HTTP请求。
  - 矢量，缩放不失真
  - 可以很精细的控制SVG图标的每一部分

1. ##### 统一的管理svg图片  
    在src文件夹中新建文件夹 icons  
    新建子文件夹 svg，用于存放所有svg文件  

    新建文件 index.js，用于加载svg文件夹中的所有svg文件  
    ```
    const requireAll = requireContext => requireContext.keys().map(requireContext)
    const req = require.context('./svg', false, /\.svg$/)
    requireAll(req)
    ```

2. ##### 下载svg图片
    打开 Iconfont-阿里巴巴矢量图标库  
    选择一个图标
    点击【下载】
    选择尺寸【128】
    点击【SVG下载】
    将下载的SVG文件放于svg文件夹中

3. ##### main.js 全局配置  
    引入 icons 文件夹  
    ```
    import './icons'
    ```

4. ##### 安装 svg-sprite-loader 依赖
    npm i --save svg-sprite-loader
    
5. ##### webpack 配置
    - ###### 标准webpack模板  
      打开build/webpack.base.conf.js  
      修改以下部分  
      ```
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        exclude: [resolve('src/icons')],
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      ```
      新增以下部分  
      ```
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('src/icons')],
        options: {
          symbolId: 'icon-[name]'
        }
      },
      ```
      
    - ###### vue-cli模板
      打开vue.config.js
      新增以下部分
      ```
      chainWebpack(config) {
        config.module
          .rule('svg')
          .exclude.add(resolve('src/icons'))
          .end()
        config.module
          .rule('icons')
          .test(/\.svg$/)
          .include.add(resolve('src/icons'))
          .end()
          .use('svg-sprite-loader')
          .loader('svg-sprite-loader')
          .options({
            symbolId: 'icon-[name]'
          })
          .end()
    },
    ```

***
#### 使用  
```
<div class="icon-container">
  <p-icon icon-class="下载的svg的名称" class-name="自定义class"></p-icon>
</div>
```
+ ##### 改变图标颜色  
  p-icon 默认会读取其父级的 color fill: currentColor;  
  你可以改变父级的color或者直接改变fill的颜色即可。

+ ##### 改变图标尺寸
  p-icon 默认会继承父级的 font-size;
  你可以改变父级的font-size。

+ ##### 自定义类
  用class-name属性可添加自定义类。

