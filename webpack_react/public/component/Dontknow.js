import React, { useState, useMemo, useEffect } from 'react'

let getStyle = (obj, attr) => {
  if (obj.currentStyle) {
    return parseInt(obj.currentStyle[attr]);
  } else {
    return parseInt(getComputedStyle(obj, false)[attr]);
  }
}

export function Dontknow () {
  let [listStyle, setListStyle] = useState({})
  let [flag, setFlag] = useState(true)

  let listArr = new Array(5).fill('test')

  useEffect(() => {
    let box = document.getElementsByClassName('box')[0]
    let boxHeight = getStyle(box, 'height')
    let list = document.getElementsByClassName('list')[0]
    let listHeight = getStyle(list, 'height')
    let seconds = Math.ceil(Math.max(listHeight, boxHeight) / Math.min(boxHeight, listHeight)) * 2

    if (flag) {
      setListStyle({
        transform: `translateY(calc(-100% + ${-boxHeight}px))`,
        transition: `${seconds / 2}s linear`,
      })
      setFlag(false)
    }
    else {
      setTimeout(() => {
        setListStyle({
          transform: `translateY(0)`,
          transition: ``,
        })
        setFlag(true)
      }, seconds * 1000)
    }
  }, [flag])

  return (
    <div>
      <nav className="box">
        <ol className='list' style={listStyle}>
          {
            listArr.map((val, index) => {
              return <li className="test" key={index}>{val}</li>
            })
          }
        </ol>
      </nav>
      <div className="border_box">
        <div className="border"></div>
      </div>
    </div>
  )
}