import React, { useContext } from "react"
import { ContextNumber } from "../context/context"

export default function Header() {
  let { countState, countDispatch } = useContext(ContextNumber)
  let upHandle = () => {
    countDispatch({
      type: "up"
    })
  }
  let downHandle = () => {
    countDispatch({
      type: "down"
    })
  }

  return (
    <div>
      <button onClick={upHandle}>up</button>
      <span>{countState}</span>
      <button onClick={downHandle}>down</button>
    </div>
  )
}
