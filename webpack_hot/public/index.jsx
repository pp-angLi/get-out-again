import './index.html'
import './index.css'

fetch('http://localhost:3000/test', {
  cache: 'no-cache', // 不缓存
  headers: {
    'content-type': 'application/json' // 接受json格式
  },
  method: 'get',
  mode: 'cors', // 跨域
  credentials: 'include'
})
  .then(res => res.json())
  .then(response => {
    console.log(response, 'response');
  })
  .catch(error => console.log(error, 'error'));