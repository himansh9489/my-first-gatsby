import React from "react"
import { useState } from "react"

export default function Counter(props) {
  const { start } = props
  const [num, setNum] = useState(start | 0)
  return (
    <>
      <h1>counter : {num}</h1>
      <button onClick={() => setNum(num + 1)}>INC</button>
      <button onClick={() => setNum(num - 1)}>DEC</button>
    </>
  )
}
