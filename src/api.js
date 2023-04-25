export const request = {
  requestInterceptors:[ //请求拦截器
    (url,options)=>{
      console.log('请求拦截器',url,options);
      options.url = 'https://pvkufbit.lc-cn-n1-shared.com/1.1' + url;
      options.headers = {
        "X-LC-Id": "{{pVkuFbItgRitCF6ffFIcpYJ9-gzGzoHsz}}",
        "X-LC-Key": "{{i24siqj8xlt5b0kIUYr8zyZt}}",
        "Content-Type": "application/json"
      }
      console.log('55555',options)
      return options;
    }
  ],
  responseInterceptors: [ //响应拦截器
    (response,options) => {
      console.log('响应拦截器',response,options);
      return response;
    }
  ]
}
