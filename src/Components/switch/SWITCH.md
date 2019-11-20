# Switch 开关
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

## 属性 Attributes  
|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|value / v-model|绑定值|boolean / string / number|——|——|
|disabled|是否禁用|boolean|——|false|
|size|开关尺寸|string|large / normal / small / mini|normal|
|text-position|文字描述显示开关及类型|string|outside / inside|——|
|font-size|文字描述字号，仅有效于text-position="outside"时|string|——|14px|
|on-text|打开时的文字描述|string|——|on|
|off-text|关闭时的文字描述|string|——|off|
|on-color|打开时的背景色|string|——|#409EFF|
|off-color|关闭时的背景色|string|——|#C0CCDA|
|on-value|打开时的值|boolean / string / number|——|true|
|off-value|关闭时的值|boolean / string / number|——|false|
|name|对应的原生 name 属性|string|——|——|
|id|对应的原生 id 属性|string|——|——|

## 事件 Events
|事件名称|说明|返回值|
|----|----|----|
|change|状态发生变化时的回调函数|新状态的值|
|input|状态发生变化时的回调函数|新状态的值|
