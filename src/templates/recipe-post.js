import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import "../templates/recipe-post.scss"

import servingIcon from '../img/icons/lunch.svg'
import timeIcon from '../img/icons/whisk.svg'
import difficultyIcon from '../img/icons/rolling-pin.svg'
import heaIcon from '../img/icons/milk-container.svg'
import hebIcon from '../img/icons/wheat.svg'
import synsIcon from '../img/icons/lollipop-spiral.svg'


export const RecipePostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  difficulty,
  time, 
  IngredientsList,
  meal_type,
  servings,
  serving_hea,
  serving_heb,
  serving_syns,
  total_hea,
  total_heb,
  total_syns,
  featuredimage,

}) => {
  const PostContent = contentComponent || Content

  return (
    <div>
    <section className="HeroRecipe" style={{
            backgroundImage: `url(${
              !!featuredimage.childImageSharp ? featuredimage.childImageSharp.fluid.src : featuredimage
            })`,
          }} /> 


      <section className="Recipe">
        <div className="o-container">
          <div className="RecipeWrapper">
            <div className="RecipeRow">
              <h2 className="RecipeTitle">{title}</h2>
            </div>
            <div className="RecipeRow">
              <div className="RecipeStatistics">
                <img src={difficultyIcon} className={"header-icons " + (difficulty >= 1  ? "" : 'disabled')} alt="Difficulty-1" />   
                <img src={difficultyIcon} className={"header-icons " + (difficulty >= 2  ? "" : 'disabled')} alt="Difficulty-2" />
                <img src={difficultyIcon} className={"header-icons " + (difficulty >= 3  ? "" : 'disabled')} alt="Difficulty-3" />
                <div className="header-icons__label">DIFFICULTY</div>
              </div>
              <div className="RecipeStatistics">
                <img src={timeIcon} className={"header-icons " + (time >= 1  ? "" : 'disabled')}  alt="Time-1" />
                <img src={timeIcon} className={"header-icons " + (time >= 2  ? "" : 'disabled')}  alt="Time-2" />
                <img src={timeIcon} className={"header-icons " + (time >= 3  ? "" : 'disabled')}  alt="Time-3" />
                <div className="header-icons__label">TIME</div>
              </div> 
              <div className="RecipeStatistics">
                <div className="header-icons__wrapper">
                  <img src={servingIcon} className="header-icons--serving" alt="Servings"/>
                  <p className="header-icons__desc">&nbsp;&nbsp;{servings}</p>
                </div>
                <div className="header-icons__label">SERVINGS</div>
              </div>
            </div>
            <div className="RecipeInnerDivider" />
            <div className="RecipeRow">
              <div className="RecipeIngredients">
                {IngredientsList.map(ingredient => (
                  <p>{ingredient}</p>
                ))}
              </div>
              <div className="RecipeProcedure">
                <PostContent content={content} />
              </div>
            </div>
            <div className="RecipeRow">
              <div className="RecipeTable">
                <header>
                  <div className="col">
                    <img src={servingIcon} className="table-icons" alt="Servings"
                      style={{ width: '3.7em', height: '3.7em', paddingTop: '4px', marginBottom: '-8px'}} />
                    <div>Servings</div>
                  </div>
                  <div className="col">
                    <img src={heaIcon} className="table-icons" alt="Helthy Extra A"/>
                    <div>HE A</div>
                  </div>
                  <div className="col">
                    <img src={hebIcon} className="table-icons" alt="Helthy Extra B"/>
                    <div>HE B</div>
                  </div>
                  <div className="col">
                    <img src={synsIcon} className="table-icons" alt="Syns" />
                    <div>SYNS</div>
                  </div>
                </header>
                <div className="row">
                  <div className="col">{servings}</div>
                  <div className="col">{total_hea}</div>
                  <div className="col">{total_heb}</div>
                  <div className="col">{total_syns}</div>
                </div>
                <div className="row">
                  <div className="col">1</div>
                  <div className="col">{serving_hea}</div>
                  <div className="col">{serving_heb}</div>
                  <div className="col">{serving_syns}</div>
                </div>
              </div>
              <div className="RecipeExtraInfo">
                <div className="RecipeTags">
                  {tags && tags.length ? (
                    <div>
                      <h6>Tags</h6>
                      <ul>
                        {tags.map(tag => (
                          <li key={tag + `tag`}>
                            <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
                <div className="RecipeMealType">
                  {meal_type && meal_type.length ? (
                    <div>
                      <h6>Meal Type</h6>
                      <ul>
                        {meal_type.map(type => (
                          <li key={type + `tag`}>
                            <Link to={`/recipes/${kebabCase(type)}/`}>{type}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


{/*     <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section> */}


    </div>
  )
}

RecipePostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const RecipePost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <RecipePostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        featuredimage={post.frontmatter.featuredimage}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        //date={post.frontmatter.date}
        time={post.frontmatter.time}
        difficulty ={post.frontmatter.difficulty}
        IngredientsList={post.frontmatter.list_of_ingredients}
        meal_type={post.frontmatter.meal_type}
        servings={post.frontmatter.servings}
        serving_hea={post.frontmatter.serving_hea}
        serving_heb={post.frontmatter.serving_heb}
        serving_syns={post.frontmatter.serving_syns}
        total_hea={post.frontmatter.total_hea}
        total_heb={post.frontmatter.total_heb}
        total_syns={post.frontmatter.total_syns}

      />
    </Layout>
  )
}

RecipePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default RecipePost

export const pageQuery = graphql`
  query RecipePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        description
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        difficulty
        time
        tags
        meal_type
        servings
        serving_hea
        serving_heb
        serving_syns
        total_hea
        total_heb
        total_syns
        list_of_ingredients
        
      }
    }
  }
`
