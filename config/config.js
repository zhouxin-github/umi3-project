import { defineConfig } from 'umi';
import routes from './routes.js';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {
    dark: false,
    // compact: true,
  },
  // 在umijs里面配置骨架
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: 'Ant Design_周鑫',
    locale: true,
    layout: 'side',
  },
  routes,
  fastRefresh: {},
});
