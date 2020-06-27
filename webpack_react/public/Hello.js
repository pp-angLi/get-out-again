import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './index.html'
import { Dontknow } from './component/Dontknow'
// export function Hello () {
//   return (
//     <div>hahahah</div>
//   )
// }

ReactDOM.render(
  < div >
    <Dontknow />
    <span>123</span>
  </div>,
  document.getElementById('root')
)