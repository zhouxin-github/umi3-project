export default [
  {
    path: '/',
    component: '@/pages/index' ,
    name: '首页'
  },
  {
    path: '/text',
    component: '@/pages/text/text',
    name: '测试',
  },
  {
    path: '/stu',
    name: '学员管理',
    routes: [
      {
        path: '/stu/Input',
        component: '@/pages/stu/Input',
        name: '学员录入',
      },
      {
        path: '/stu/list',
        component: '@/pages/stu/list',
        name: '学员列表',
      },
    ]
  },
]
