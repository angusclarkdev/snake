import React, { Component } from 'react'
import Navigation from '@molecules/Navigation'
import RecipeList from '@components/RecipeList'

class App extends Component {
  render () {
    return (
      <div>
        <Navigation />
        <RecipeList />
      </div>
    )
  }
}

export default App
