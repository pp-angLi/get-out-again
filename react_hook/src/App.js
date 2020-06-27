import React, { useReducer } from "react"
import "./App.css"
import { store } from "./store/store"
import { ContextNumber } from "./context/context"
import Header from "./header/Header"
import { Main } from "./main/Main"

function App() {
  const { count } = store
  const [countState, countDispatch] = useReducer(count, 0)
  return (
    <ContextNumber.Provider value={{ countState, countDispatch }}>
      <Header />
      <Main />
    </ContextNumber.Provider>
  )
}

export default App
