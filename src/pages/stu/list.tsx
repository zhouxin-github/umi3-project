import { Space, Table, Tag, Button } from 'antd';
import React, {useState, useEffect} from 'react';
// react ts 不支持这种写法 要改用require
// import {stuGet} from '../../api/stu';
const {stuGet} = require('@/api/stu.js')
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '成绩',
    dataIndex: 'score',
    key: 'score',
  },
  {
    title: '城市',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: '时间',
    key: 'time',
    dataIndex: 'time',
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Button type="primary" size='small'>编辑</Button>
        <Button type="primary" size='small' danger>删除</Button>
      </Space>
    ),
  },
];
// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     score: 98,
//     city: '重庆',
//     time: '2022-10-10',
//   }
// ];
export default function StuList() {
  let [data,setData] = useState([])
  useEffect(()=>{
    stuGet().then((res:any) =>{
      // 数据太多使用原始mock数据
      // console.log(res);
      setData(res.data)
      // console.log(res.data);
    })
  })
  return (<Table columns={columns} dataSource={data} />)
}
