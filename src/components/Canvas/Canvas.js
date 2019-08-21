import React from 'react'
import styled from 'styled-components'
import Snake from '@components/Snake'

const Container = styled.canvas`
  position: absolute;
  border: thin solid red;
  height: 700px;
  width: 900px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Target = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: red;
  position: relative;
  left: 50%;
  top: 50%;
`

const Canvas = () => {
  return (
    <Container id='canvas'>
      <Snake />
      <Target />
    </Container>
  )
}

export default Canvas
