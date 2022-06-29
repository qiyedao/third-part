import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  hash: true,
  // ssr: {},
  devtool: 'eval',
  // outputPath: 'dist/zh-CN',
  // publicPath: '/zh-CN/',
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
  },

  headScripts: [
    'https://lf1-cdn-tos.bytegoofy.com/goofy/lark/op/h5-js-sdk-1.5.15.js',
  ],

  dva: {
    immer: false,
    hmr: true,
  },
  antd: {},
  // ignoreMomentLocale: true,
  // locale: {
  //   // default zh-CN
  //   default: 'zh-CN',
  //   antd: true,
  //   // default true, when it is true, will use `navigator.language` overwrite default
  //   baseNavigator: true,
  // },
  history: { type: 'browser' },
  routes,
  fastRefresh: {},
});
