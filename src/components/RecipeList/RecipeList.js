import React, { PureComponent } from 'react'
import styles from './RecipeList.scss'

const dummyRecipe = {
  name: 'Chicken + Sweet Potato',
  ingredients: {
    chicken: '200g',
    sweetPotato: '400g',
    garlicClove: 1,
    basil: '2 leaves'
  },
  cookTime: 30,
  prepTime: 15,
  lastCooked: 28022019
}

const data = Array(20).fill(dummyRecipe)

console.info(data)
class RecipeList extends PureComponent {
  render () {
    const { recipeWrapper, recipeItem } = styles

    const recipeList = data.map(i => (
      <div className={recipeItem}>
        <li> Name: {i.name} </li>
        <li> Ingredients: {i.ingredients[i]} </li>
        <li> Cooking Time: {i.cookTime} </li>
        <li> Prep Time: {i.prepTime} </li>
        <li> Last cooked: {i.lastCooked} </li>
      </div>
    ))

    return (
      <section>
        <div className={recipeWrapper}>
          {recipeList}
        </div>
      </section>
    )
  }
}

export default RecipeList
