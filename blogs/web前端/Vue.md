---
title: Vue2
date: 2024/4/9
tags:
 - vue框架
categories:
 - web前端
---

#  脚手架 Vue CLI

使用步骤： 
1. 全局安装 (一次) ：yarn global add @vue/cli 或 npm i @vue/cli -g 
2. 查看 VueCLI 版本：vue --version
3.  创建项目架子：vue create project-name（项目名-不能用中文）
4.  启动项目： yarn serve 或 npm run serve（找package.json）


# vue实例中的属性

### 计算属性computed

在 Vue.js 中，`computed` 是一个用于定义计算属性的选项。计算属性是基于响应式依赖进行缓存的属性，它的值会根据依赖的数据动态计算，并且只有在依赖发生变化时才会重新计算。

使用 `computed` 可以将计算属性定义为一个函数，该函数会根据依赖的数据进行计算，并返回计算结果。计算属性的值可以像普通属性一样在模板中使用。

以下是一个示例，演示了如何使用 `computed`：



在这个示例中，我们定义了一个 Vue 实例，并在 `data` 选项中定义了 `firstName` 和 `lastName` 两个属性。然后，在 `computed` 选项中定义了一个计算属性 `fullName`，它的值是根据 `firstName` 和 `lastName` 进行拼接得到的。

在模板中，我们可以直接使用 `fullName` 计算属性的值：

```html
<div>{{ fullName }}</div>
```

当 `firstName` 或 `lastName` 的值发生变化时，`fullName` 计算属性会自动重新计算，并更新模板中的显示。

计算属性的特点是它会进行缓存，只有在依赖的数据发生变化时才会重新计算。这意味着多次访问计算属性时，只有在依赖的数据发生变化时才会执行计算逻辑，其余时间会直接返回缓存的结果，从而提高性能。

与计算属性类似的选项是 `watch`，它用于监听数据的变化并执行相应的操作。不同之处在于，计算属性是基于依赖的数据进行计算，而 `watch` 是在数据变化时执行自定义的回调函数。

### 监视属性watch

在 Vue.js 中，`watch` 是一个选项，用于监视数据的变化并执行自定义的回调函数。`watch` 选项允许你在数据发生变化时执行一些操作，例如异步请求、计算其他数据或执行特定逻辑。

你可以在 Vue 组件的选项中定义 `watch`，并为需要监视的数据属性指定回调函数。当被监视的数据属性发生变化时，回调函数将被触发。

以下是一个示例，演示如何使用 `watch` 选项：

```javascript
new Vue({
  data: {
    count: 0
  },
  watch: {
    count: function(newCount, oldCount) {
      console.log(`count 属性从 ${oldCount} 变为 ${newCount}`);
      // 在这里执行你的自定义逻辑
    }
  }
});
```

在这个示例中，我们定义了一个 Vue 实例，其中包含一个名为 `count` 的数据属性。然后，我们在 `watch` 选项中为 `count` 属性定义了一个回调函数。这个回调函数接受两个参数：新的属性值 `newCount` 和旧的属性值 `oldCount`。

当 `count` 属性的值发生变化时，回调函数将被触发，并打印出新旧值的信息。你可以在回调函数中执行你的自定义逻辑，例如发送网络请求或更新其他数据。

你还可以监视多个属性，只需在 `watch` 选项中添加多个属性和相应的回调函数即可。

需要注意的是，`watch` 通常用于需要异步操作或处理复杂逻辑的情况，而对于简单的计算属性，使用 `computed` 更为合适，因为 `computed` 具有自动缓存的特性，只在依赖的数据变化时才重新计算。



# 组件
### 组件的分类

一般组件：放components文件夹
路由组件：放pages文件夹

### 组件结构

- template：结构 （有且只能一个根元素）
- script:   js逻辑 
- style： 样式 (可支持less，需要装包) 
	局部样式scoped，只对当前组件样式生效，不会产生覆盖
	```css
	<style scoped><style>
	
	```

### 普通组件的注册使用-局部注册

1. 创建.vue文件（三个组成部分）
2. 在使用的组件内先导入再注册，最后使用

只能在注册的组件内使用

使用：当成html标签使用即可  <组件名></组件名>

组件名规范 —> 大驼峰命名法， 如 HmHeader

```js
// 在需要的页面导入需要注册的组件   import 组件对象 from '.vue文件路径'
import HmHeader from './components/HmHeader'

export default {  // 局部注册
  components: {
   '组件名': 组件对象,
    HmHeader:HmHeaer,
    HmHeader
  }
}
```

### 普通组件的注册使用-全局注册

1. 创建.vue文件（三个组成部分）
2. main.js中进行全局注册



```js
// 在main.js导入需要注册的组件   import 组件对象 from '.vue文件路径'
import HmHeader from './components/HmHeader'

// 进行全局注册
// Vue.component('组件名', 组件对象)
Vue.component('HmFooter', HmFooter)
```

## 组件的通信

### Props和Events
可以通过props将数据从父组件传递给子组件，然后通过events触发事件来向父组件发送消息。这种方式适合父子组件之间的通信。
```vue
<!-- 父组件 -->
<template>
  <child-component :message="parentMessage" @update="handleUpdate" />
</template>

<script>
export default {
  data() {
    return {
      parentMessage: 'Hello from parent'
    };
  },
  methods: {
    handleUpdate(message) {
      console.log(message); // 在这里处理从子组件发送的消息
    }
  }
}
</script>

<!-- 子组件 -->
<template>
  <div>
    {{ message }}
    <button @click="sendMessageToParent">Send Message</button>
  </div>
</template>

<script>
export default {
  props: ['message'],
  methods: {
    sendMessageToParent() {
      this.$emit('update', 'Hello from child'); // 向父组件发送消息
    }
  }
}
</script>

```

#### 父传子props

![image-20231023190403895](https://raw.githubusercontent.com/lldscc/PicGo_bed/main/image/image-20231023190403895.png)

#### 子传父

![image-20231023190720932](https://raw.githubusercontent.com/lldscc/PicGo_bed/main/image/image-20231023190720932.png)




### VueX
 Vuex是Vue的状态管理库，用于在多个组件之间共享状态。它将状态保存在一个中央存储中，并通过mutations和actions来修改和获取状态。这适用于更大型的应用程序或需要跨组件通信的情况。

#### 使用

安装vuex插件

```bash
yarn add vuex@3 或者 npm i vuex@3
```

创建仓库store/index.js

```jsx
// 导入 vue
import Vue from 'vue'
// 导入 vuex
import Vuex from 'vuex'
// vuex也是vue的插件, 需要use一下, 进行插件的安装初始化
Vue.use(Vuex)

// 创建仓库 store
const store = new Vuex.Store()

// 导出仓库
export default store
```

```jsx
// 测试vuex
created(){
   console.log(this.$store)
}
```

















#### $emit 和 $on

```js
// 在发送组件
this.$emit('custom-event', data);
// 在接收组件
this.$on('custom-event', data => {
  // 处理数据
});

```
#### provide 和 inject
```js
// 在提供组件
provide() {
  return {
    message: 'Data from ancestor component'
  };
}

// 在注入组件
inject: ['message'],

```


# 路由

Vue2     VueRouter3.x      Vuex3.x
Vue3    VueRouter4.x      Vuex4.x

VueRouter插件<https://v3.router.vuejs.org/zh/>

### 固定5个固定的步骤

1. 下载 VueRouter 模块，版本3.6.5

   ```bash
   yarn add vue-router@3.6.5
   ```

2. 引入VueRouter(main.js)

   ```js
   import VueRouter from 'vue-router'
   ```

3. 安装注册(main.js)

   ```js
   Vue.use(VueRouter)
   ```

4. 创建路由对象

   ```js
   const router = new VueRouter()
   ```

5. 注入，将路由对象注入到new Vue实例中，建立关联(main.js)

   ```js
   new Vue({
     render: h => h(App),
     router:router
   }).$mount('#app')
   
   ```

当我们配置完以上5步之后 就可以看到浏览器地址栏中的路由 变成了 /#/的形式。表示项目的路由已经被Vue-Router管理了



### 两个核心步骤

#### 创建需要的组件 (views目录)，配置路由规则(src/router/index.js)
```js
// 导入组件
import VueRouter from 'vue-router'
import HomeM from '../pages/HomeM'
import BuyM from '../pages/BuyM'
import AboutM from '../pages/AboutM'
import LoveM from '../pages/LoveM'
//配置规则
export default new VueRouter(
    {
        routes: [
            { path: '/home', component: HomeM },
            { path: '/buy', component: BuyM },
            { path: '/about', component: AboutM },
            { path: '/love', component: LoveM },
        ]
    }
)
```

#### 配置导航，配置路由出口:路径匹配的组件显示的位置( App.vue)
```html
 <div id="app">
	<div class="top">
		<router-view></router-view>
	</div>
	<div>
	    <router-link to="/home">Home</router-link>
	    <router-link to="/buy">Buy</router-link>
	    <router-link to="/love">Love</router-link>
	    <router-link to="/about">About</router-link>
	 </div>
</div>
```

### 多级路由配置
1.配置路由规则，使用children配置项：
```js
routes:[
	{
		path:'/about',
		component:About,
	},
	{
		path:'/home',
		component:Home,
		children:[ //通过children配置子级路由
			{
				path:'news', //此处一定不要写：/news
				component:News
			},
			{
				path:'message',//此处一定不要写：/message
				component:Message
			}
		]
	}
]
```

2.跳转（要写完整路径）

```vue
<router-link to="/home/news">News</router-link>
```

### 路由query传递参数
```js
<!-- 跳转并携带query参数，to的字符串写法 -->
<router-link :to="/home/message/detail?id=666&title=你好">跳转</router-link>
				
<!-- 跳转并携带query参数，to的对象写法 -->
<router-link 
	:to="{
		path:'/home/message/detail',
		query:{
		   id:666,
            title:'你好'
		}
	}"
>跳转</router-link>

```

接收参数：
```js
$route.query.id
$route.query.title
```

### 路由命名

1. 作用：可以简化路由的跳转。

2. 如何使用

   1. 给路由命名：

      ```js
      {
      	path:'/demo',
      	component:Demo,
      	children:[
      		{
      			path:'test',
      			component:Test,
      			children:[
      				{
                            name:'hello' //给路由命名
      					path:'welcome',
      					component:Hello,
      				}
      			]
      		}
      	]
      }
      ```

      2.简化跳转：

      ```vue
      <!--简化前，需要写完整的路径 -->
      <router-link to="/demo/test/welcome">跳转</router-link>
      
      <!--简化后，直接通过名字跳转 -->
      <router-link :to="{name:'hello'}">跳转</router-link>
      
      <!--简化写法配合传递参数 -->
      <router-link 
      	:to="{
      		name:'hello',
      		query:{
      		   id:666,
                  title:'你好'
      		}
      	}"
      >跳转</router-link>
      ```

      

### 路由模块化

在src/router创建index.js创建路由规则，在main.js导入jndex.js；

引入组件：基于@（src目录），找组件



### 声明式导航~导航链接

实现导航高亮效果

vue-router提供了一个全局组件router-link(取代a标签)

1.能跳转，配置to属性指定路径（必须）。本质还是a标签，to无需#

2.能高亮，默认就会提供高亮类名，可以直接设置高亮样式

```html
 <div class="footer_wrap">
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/friend">朋友</router-link>
    </div>
//css
.footer_wrap a.router-link-active{
  background-color: #37b50a;
}
```

#### 属性：replace

控制路由跳转时操作浏览器历史记录的模式（默认push：追加历史记录；replace：替换当前记录）

```vue
//开启替换模式replace
<router-link replace  to="/find">发现音乐</router-link>
```



### 缓存路由组件

```vue
//在组件展示加<keep alive> </keep alive>
<keep alive  include='缓存组件名'> 
	<router-view></router-view>
</keep alive>
```



绝对路径 ：@相当与src目录
### 路由的跳转
1. 使用router-link标签
```js
<router-link to="/home">Get Started</router-link>
```
2. 绑定点击事件，方法
```js
this.$router.push('/enter')
```

## Vue生命周期

![生命周期](https://raw.githubusercontent.com/lldscc/PicGo_bed/main/image/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.png)



# 其他

## 生命周期钩子函数















































这段代码看起来是在Vue.js应用中的一个生命周期钩子函数 `created` 中编写的。这代码段的作用是用于控制用户在应用中的访问路径（路由），并使用`sessionStorage`来保存一个标志（flag）来追踪用户是否已经访问了特定页面。

让我逐行解释这段代码的功能：

1. `let flag = sessionStorage.getItem('flag')`: 这一行代码从浏览器的`sessionStorage`中获取一个名为'flag'的值，并将其存储在`flag`变量中。`sessionStorage`是用于在浏览器会话期间存储数据的Web API。如果'flag'值不存在，`flag`将被设置为`null`。

2. `if (flag == null && this.$route.path != "/enter")`: 这是一个条件语句，它检查以下两个条件是否都成立：
   - `flag`的值等于`null`，这表示用户尚未访问过该页面。
   - `this.$route.path`不等于"/enter"，这表示用户当前的路由路径不是"/enter"。

   如果这两个条件都成立，那么就执行以下代码块。

3. `this.$router.push('/enter')`: 这行代码使用Vue Router的 `$router`对象将用户重定向到"/enter"路径。如果用户之前没有访问过该页面（`flag`为`null`），并且当前的路由路径不是"/enter"，则用户会被强制重定向到"/enter"页面。

4. `sessionStorage.setItem('flag', true)`: 最后，这一行将一个名为'flag'的新值设置为`true`，表示用户已经访问了特定页面。这将防止用户再次被重定向到"/enter"，因为`flag`不再是`null`。

总结：这段代码的目的是确保用户只有在第一次访问页面时才会被重定向到"/enter"，并且之后不会再次被重定向。通过使用`sessionStorage`来存储用户的访问状态，它实现了这个逻辑。

## sessionStorage
`sessionStorage` 是 Web 浏览器提供的一种客户端存储数据的机制，它允许你在浏览器会话期间（即在同一个标签页或窗口打开的整个会话期间）存储数据，并且数据在页面刷新或重新加载时仍然保持有效。它是 Web 存储的一种形式，与 `localStorage` 相似，但有一些重要的区别。

以下是有关 `sessionStorage` 的关键特点：

1. **会话期间有效性**：`sessionStorage` 存储的数据只在浏览器会话期间有效。这意味着当用户关闭标签页或浏览器窗口时，数据将被清除。如果用户在同一标签页或窗口中刷新页面，存储在 `sessionStorage` 中的数据仍然可用。

2. **页面间共享**：`sessionStorage` 存储的数据在同一浏览器窗口或标签页的不同页面之间共享。这使得它成为在同一会话期间跨页面传递数据的有用工具。

3. **数据持久性**：与 `localStorage` 不同，`sessionStorage` 中存储的数据不会持久存储在用户的计算机上，因此它不会在用户关闭浏览器后保留。这可以用于存储临时数据，例如会话状态或临时设置。

4. **JavaScript API**：`sessionStorage` 可以通过 JavaScript 使用。你可以使用 `sessionStorage.setItem(key, value)` 存储数据，使用 `sessionStorage.getItem(key)` 获取数据，以及其他操作来管理会话存储中的数据。

示例用法：

```javascript
// 存储数据
sessionStorage.setItem('username', 'JohnDoe');

// 获取存储的数据
const username = sessionStorage.getItem('username');
console.log(username); // 输出 'JohnDoe'

// 删除存储的数据
sessionStorage.removeItem('username');
```

总之，`sessionStorage` 是一个用于在浏览器会话期间存储数据的有用工具，适用于需要临时存储和共享数据的场景，而不需要





