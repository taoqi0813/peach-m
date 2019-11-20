# peach-m
基于Vue的移动端ui组件库  

### 安装
```
npm i --save peach-m
```

### 引用
```
import PeachM from "peach-m";
Vue.use(PeachM);
import "peach-m/src/Styles/index.css";
```

### 组件
1. Switch 开关
+ 基础用法  
绑定v-model到一个Boolean类型的变量。
```
<p-switch
  v-model="value">
</p-switch>

<script>
export default {
  data() {
    return {
      value: false
    }
  }
}
</script>
```

+ 自定义颜色  
使用on-color属性与off-color属性来设置开关的背景色。
```
<p-switch
  v-model="value"
  on-color="#13ce66"
  off-color="#ff4949">
</p-switch>
```

+ 自定义大小  
使用size属性设置开关的大小，可选"large"、"normal"(默认)、"small"、"mini"。
```
<p-switch
  v-model="value"
  size="large">
</p-switch>
```

+ 文字描述
    - 文字在外部  
    使用text-position属性来开启文字描述功能并设置文字位置，  
    使用on-text属性与off-text属性来设置开关的文字描述，  
    使用font-size属性来设置文字字号。
    ```
    <p-switch
      v-model="value"
      text-position="outside"
      on-text="开"
      off-text="关"
      font-size="14px">
    </p-switch>
    ```
    
    - 文字在内部  
    使用text-position属性来开启文字描述功能并设置文字位置，  
    使用on-text属性与off-text属性来设置开关的文字描述（避免文字超出开关区域，勿超过两个汉字）。
    ```
    <p-switch
      v-model="value"
      text-position="inside"
      on-text="开"
      off-text="关">
    </p-switch>
    ```

+ 自定义开关值  
设置on-value和off-value属性，接受Boolean, String或Number类型的值。
```
<p-switch
  v-model="value"
  on-value="1"
  off-value="0">
</p-switch>
```

+ 禁用状态  
设置disabled属性，接受一个Boolean，设置true即可禁用。
```
<p-switch
  v-model="value"
  disabled>
</p-switch>
```

+ 异步控制  
需要异步控制开关时，可以使用value属性和input事件代替v-model，并在input事件回调函数中手动处理开关状态。
```
<p-switch
  :value="value"
  @input="onInput">
</p-switch>

export default {
  data() {
    return {
      value: true
    };
  },

  methods: {
    onInput(val) {
      // do something
      // then
      this.value = val;
    }
  }
}; 
```

### 版本记录
|  版本号   | 更新日期  | 新增功能  |
|  ----  | ----  | ----  |
| 1.0.1  | 2019-11-20 | 新增switch组件 |
| 1.0.0  | 2019-11-19 | 创建项目 |