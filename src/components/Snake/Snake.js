import React, { Component } from 'react'
import styled from 'styled-components'

const Player = styled.div`
  height: 20px;
  width: 80px;
  border-radius: 25px;
  background-color: blue;
  transition: transform 1s;
  :hover {
    transform: translate(50px, 0);
  }
`

class Snake extends Component {
  render () {
    return <Player />
  }
}

export default Snake
