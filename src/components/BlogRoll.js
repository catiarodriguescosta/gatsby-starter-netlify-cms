import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import styled from "styled-components"



const BlogGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

`

const BlogPost = styled.article`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  width: 31%;
  margin: 1%;
  box-shadow: 0 0 5px #d5d5d5;
  transition: 0.25s;
  &:hover{
    box-shadow: 0 0 30px #d5d5d5;
  }
  a {
    color: #333;
  }

`
const BlogPostThumbnail = styled.div`

`

const BlogPostTitle = styled.h5`
  margin: 0;
`

const BlogPostBody = styled.div`
  padding: 10px;
  text-align: center;
`

const BlogPostData = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-family: "Barlow Semi Condensed";
  font-weight: 400;
  color: #ea7878;
  padding: 5px 10px 10px; 
  text-align: center;
  
`

const BlogPostClassification = styled.span`

`


class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <BlogGrid>
        {posts &&
          posts.map(({ node: post }) => (
            <BlogPost key={post.id}>
                
                  <header>
                    {post.frontmatter.featuredimage ? (
                      <BlogPostThumbnail>
                        <Link to={post.fields.slug}>
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: post.frontmatter.featuredimage,
                              alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                            }}
                          />
                        </Link>
                      </BlogPostThumbnail>
                    ) : null }
                    
                    <BlogPostBody>
                      <Link to={post.fields.slug}>
                        <BlogPostTitle>{post.frontmatter.title}</BlogPostTitle>
                      </Link>
                      
                    </BlogPostBody>

                  </header>

                  <BlogPostData>
                        <BlogPostClassification>
                          {post.frontmatter.classification}
                        </BlogPostClassification>
                        { (post.frontmatter.classification === "free" || post.frontmatter.classification === "" )  ? null : (
                          <span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
                         )}
                        {post.frontmatter.classification === "free" ? null : (
                          post.frontmatter.serving_syns,
                          <span>syn (s) <em>per serving</em> &nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
                        )}
                        {post.frontmatter.classification === "free" ? null : (
                          post.frontmatter.total_syns,
                          <span>syn (s) <em>per total</em></span>
                        )}
                  </BlogPostData>
                
              </BlogPost>
          ))}

      </BlogGrid>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                serving_syns
                classification
                total_syns
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
