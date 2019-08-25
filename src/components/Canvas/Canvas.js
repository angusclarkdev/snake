import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

const Canvas = styled.canvas`
  position: absolute;
  border: 1px solid red;
  width: 900px;
  height: 700px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
// const rect = (vals) => {
//   const { x, y, width, height } = vals
//   ctx.fillRect(x, y, width, height)
// }

const createTopLayer = (canvas, ctx) => {
  let { width, height } = canvas
  let widthAcc = 0
  let heightAcc = 0
  // coordinates
  while (widthAcc < width - 10) {
    ctx.fillRect(widthAcc, 0, 9, 5)
     widthAcc += 10
  }

//   while (heightAcc < height - 6) {
//     ctx.fillRect(0, heightAcc, 9, 5)
//     heightAcc += 6
//   }
//   ctx.fillRect(widthAcc, 0, 10, 5)
//   ctx.fillRect(0, heightAcc, 9, 6)
// }

const gameArea = () => {
  const canvasRef = useRef(null)
  useEffect(() => createCanvas())
  const createCanvas = () => {
    const ctx = canvasRef.current.getContext('2d')
    console.dir(canvasRef.current)
    createTopLayer(canvasRef.current, ctx)
  }

  return (
    <Canvas ref={canvasRef} />
  )
}

export default gameArea
