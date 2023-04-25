import mockjs from 'mockjs';

export default {
  // 使用 mockjs 等三方库
  'GET /classes/stu': mockjs.mock({
    code: 200,
    msg: '学员列表加载成功',
    'data|100': [
      {
        name: '@cname',
        score: '@integer(50,100)',
        city: '@city',
        time: '@date'
      }
    ],
  }),
};
