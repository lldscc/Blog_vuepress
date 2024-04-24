import { defineUserConfig } from "vuepress";
import {recoTheme} from "vuepress-theme-reco";


export default defineUserConfig({
  lang: "zh-CN",
  title: "llds_Blog",
  description: "Just playing around",
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    primaryColor: '#62c3ed',
    catalogTitle: '这是知识呀😲',
    logo: "/logo.png",
    author: "llds_顺",
    authorAvatar: "/head.png",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // 导航栏
    navbar: [
      { text: "首页", icon:'Home', link: "/" },
      { text: '博客', icon:'Book', link: '/posts'},
      { text: '时间轴', link: '/timeline/', icon:'Time'},
    ],



    // 自动分类
    autoSetBlogCategories: true,
    // 自动将分类和标签添加至头部导航条
    autoAddCategoryToNavbar: {
      location: 2, // 默认 0
      categoryText: '分类', // 默认 categories
      tagText: '标签' // 默认 tags
    },
    // 自动设置系列
    autoSetSeries: true,

    // 评论
    commentConfig: {
      type: 'valine',
      options: {
        appId: '6YB476BOIflhj1tnBGNYCaQh-gzGzoHsz', // your appId
        appKey: 'BB5Wpia9srCxypRpqBc2rkfE', // your appKey
        hideComments: true, // 全局隐藏评论，默认 false
      },
    },
  }),
});
