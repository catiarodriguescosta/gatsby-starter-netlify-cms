import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
//import Hero from '../components/Hero'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import styled from "styled-components"

import servingIcon from '../img/icons/lunch.svg'
import timeIcon from '../img/icons/whisk.svg'
import difficultyIcon from '../img/icons/rolling-pin.svg'
import heaIcon from '../img/icons/milk-container.svg'
import hebIcon from '../img/icons/wheat.svg'
import synsIcon from '../img/icons/lollipop-spiral.svg'


const Recipe = styled.section`
  margin-top: -100px;
  @media(min-width: 768px) {
    margin-top: -300px;
  }
  @media(min-width: 960px) {
    margin-top: -500px;
  }
`
const RecipeWrapper = styled.div`
  background: #FCF9EE;
  padding: 15px 25px;  
  @media(min-width: 768px) {
    padding: 50px;  
  }
`
const RecipeRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px 0;
`
const RecipeTitle = styled.h2`
  text-align: center;
`
const RecipeStatistics = styled.div`
  font-family: "Barlow Semi Condensed";
  font-weight: 700;
  text-align: center;
  padding-right: 25px;
  padding-left: 20px;

  .header-icons__label{
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .header-icons {
    height: 1.5em;
    width: 1.5em;
    margin-right: -5px;

    .disabled{
      opacity: 0.4;
    }
  }

  .header-icons--serving{
    height: 1.8em;
    width: 1.8em;
  }

  .header-icons__desc {
    font-size: 22px;
    font-weight: 600;
    margin-top: 1px;
    margin-bottom: 0px;
  }

  .header-icons__wrapper {
    display: flex;
    justify-content: center;
  }
`

const RecipeInnerDivider = styled.hr`
  background-color: #FCF9EE;
  border-top: 5px double #000;
`
const RecipeIngredients = styled.div`
  width: 100%;
  font-family: "Barlow Semi Condensed";
  font-weight: 600;
  padding-bottom: 10px;

  @media(min-width: 768px) {
    width: 48%;
    margin-right: 2%;
  }

  @media(min-width: 960px) {
    width: 30%;
    margin-right: 3%;
  }
  
`
const RecipeProcedure = styled.div`
  width: 100%;
  font-family: "Barlow Semi Condensed";
  font-weight: 400;

  @media(min-width: 768px) {
    width: 49%;
    margin-left: 1%;
  }

  @media(min-width: 960px) {
    width: 65%;
    margin-left: 1%;
  }

  ol {
    list-style: none;
    counter-reset: procedure-counter;
  }

  ol li {
    counter-increment: procedure-counter;
  }

  ol li::before {
    content: counter(procedure-counter) ". ";
    font-family: "Abril Fatface";
    font-size: 20px;
  }
`
const RecipeTable = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Barlow Semi Condensed";
  font-weight: 600;
  font-size: 16px; 
  border: 1px solid;
  text-align: center;

  @media(min-width: 768px) {
    width: 47%;
    margin-right: 3%;
  }

  @media(min-width: 960px) {
    width: 30%;
    margin-right: 3%;
  }

  header {
    font-size: 12px; 
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    border-bottom: 1px solid;

    .col {
      padding-bottom: 5px;
    }
  }

  header, .row {
    display: flex; 
  }

  .col {
    flex: 1;
  }

  .row:not(:last-of-type) {
    border-bottom: 1px solid;
  }
  .col:first-of-type {
    border-right: 1px solid;
  }

  .table-icons {
    width: 2.5em;
    height: 2.5em;
    padding-top: 10px;
    padding-bottom: 3px;
  }

`
const RecipeExtraInfo = styled.div`
  font-family: "Barlow Semi Condensed";
  font-weight: 400;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media(min-width: 768px) {
    width: 48%;
    margin-left: 1%;
  }

  @media(min-width: 960px) {
    width: 65%;
    margin-left: 1%;
  }

  ul {
    list-style: square inside;
    padding-inline-start: 0px;
    margin-block-start: 0px;
    margin-block-end: 0px;
  }
`
const RecipeTags = styled.div`
  width: 100%;
  @media(min-width: 768px) {
    width: 49%;
    margin-right: 1%;
  }
  @media(min-width: 960px) {
    width: 32%;
    margin-right: 1%;
  }
`
const RecipeMealType = styled.div`
  width: 100%;
  @media(min-width: 768px) {
    width: 49%;
    margin-left: 1%;
  }
  @media(min-width: 960px) {
    width: 32%;
    margin-left: 1%;
  }
`


export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  difficulty,
  Ingredients,
  Procedure,
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
      {/* <Hero 
        //srcImg={image}
        Heading= {title}
        SubHeading= ""
      /> */}

{/*     <div className="content">
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(${
              !!featuredimage.childImageSharp ? featuredimage.childImageSharp.fluid.src : featuredimage
            })`,
          }}
        >test
        </div>
      </div> */}

      <PreviewCompatibleImage
        imageInfo={{
          image: featuredimage,
          alt: `main image for ${title}'s recipe`,
        }}
      />
      <Recipe>
        <div className="o-container">
          <RecipeWrapper>
            <RecipeRow>
              <RecipeTitle>{title}</RecipeTitle>
            </RecipeRow>
            <RecipeRow>
              <RecipeStatistics>
                <img src={difficultyIcon} className={"header-icons " + (difficulty >= 1  ? null : 'disabled')} alt="Difficulty-1" />   
                <img src={difficultyIcon} className={"header-icons " + (difficulty >= 2  ? null : 'disabled')} alt="Difficulty-2" />
                <img src={difficultyIcon} className={"header-icons " + (difficulty >= 3  ? null : 'disabled')} alt="Difficulty-3" />
                <div className="header-icons__label">DIFFICULTY</div>
              </RecipeStatistics>
{/*               <RecipeStatistics>
                <img src={timeIcon} className={"header-icons " + (time >= 1  ? null : 'disabled')}  alt="Time-1" />
                <img src={timeIcon} className={"header-icons " + (time >= 1  ? null : 'disabled')}  alt="Time-2" />
                <img src={timeIcon} className={"header-icons " + (time >= 1  ? null : 'disabled')}  alt="Time-3" />
                <div className="header-icons__label">TIME</div>
              </RecipeStatistics> */}
              <RecipeStatistics>
                <div className="header-icons__wrapper">
                  <img src={servingIcon} className="header-icons--serving" alt="Servings"/>
                  <p className="header-icons__desc">&nbsp;&nbsp;{servings}</p>
                </div>
                <div className="header-icons__label">SERVINGS</div>
              </RecipeStatistics>
            </RecipeRow>
            <RecipeInnerDivider />
            <RecipeRow>
              <RecipeIngredients>
                <PostContent content={Ingredients} />
                {Ingredients}
              </RecipeIngredients>
              <RecipeProcedure>
                <PostContent content={Procedure} />
                {Procedure}
              </RecipeProcedure>
            </RecipeRow>
            <RecipeRow>
              <RecipeTable>
                <header>
                  <div class="col">
                    <img src={servingIcon} className="table-icons" alt="Servings"
                      style={{ width: '3.7em', height: '3.7em', paddingTop: '4px', marginBottom: '-8px'}} />
                    <div>Servings</div>
                  </div>
                  <div class="col">
                    <img src={heaIcon} className="table-icons" alt="Helthy Extra A"/>
                    <div>HE A</div>
                  </div>
                  <div class="col">
                    <img src={hebIcon} className="table-icons" alt="Helthy Extra B"/>
                    <div>HE B</div>
                  </div>
                  <div class="col">
                    <img src={synsIcon} className="table-icons" alt="Syns" />
                    <div>SYNS</div>
                  </div>
                </header>
                <div class="row">
                  <div class="col">{servings}</div>
                  <div class="col">{total_hea}</div>
                  <div class="col">{total_heb}</div>
                  <div class="col">{total_syns}</div>
                </div>
                <div class="row">
                  <div class="col">1</div>
                  <div class="col">{serving_hea}</div>
                  <div class="col">{serving_heb}</div>
                  <div class="col">{serving_syns}</div>
                </div>
              </RecipeTable>
              <RecipeExtraInfo>
                <RecipeTags>
                  {tags && tags.length ? (
                    <div>
                      <h6>Tags</h6>
                      <ul className="taglist">
                        {tags.map(tag => (
                          <li key={tag + `tag`}>
                            <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </RecipeTags>
                <RecipeMealType>
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
                </RecipeMealType>
              </RecipeExtraInfo>
            </RecipeRow>
          </RecipeWrapper>
        </div>
      </Recipe>


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

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
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
        //time={post.frontmatter.duration}
        difficulty ={post.frontmatter.difficulty}
        Ingredients={post.frontmatter.Ingredients}
        Procedure={post.frontmatter.Procedure}
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

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
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
        Ingredients
        Procedure
        tags
        meal_type
        servings
        serving_hea
        serving_heb
        serving_syns
        total_hea
        total_heb
        total_syns
      }
    }
  }
`
