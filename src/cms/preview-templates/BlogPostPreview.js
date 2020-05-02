import React from 'react'
import PropTypes from 'prop-types'
import { RecipePostTemplate } from '../../templates/recipe-post'

const RecipePostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <RecipePostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
      difficulty = {entry.getIn(['data', 'difficulty'])}
      time = {entry.getIn(['data', 'time'])} 
      IngredientsList = {entry.getIn(['data', 'list_of_ingredients'])} 
      meal_type = {entry.getIn(['data', 'meal_type'])} 
      servings = {entry.getIn(['data', 'servings'])} 
      serving_hea= {entry.getIn(['data', 'serving_hea'])} 
      serving_heb= {entry.getIn(['data', 'serving_heb'])} 
      serving_syns= {entry.getIn(['data', 'serving_syns'])} 
      total_hea= {entry.getIn(['data', 'total_hea'])} 
      total_heb = {entry.getIn(['data', 'total_heb'])} 
      total_syns = {entry.getIn(['data', 'total_syns'])} 
      //featuredimage = 
    />
  )
}

RecipePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default RecipePostPreview
