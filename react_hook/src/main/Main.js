import React, { useContext } from "react"
import { ContextNumber } from "../context/context"

export function Main () {
  const { countState, countDispatch } = useContext(ContextNumber)
  return <div>{countState}</div>
}
