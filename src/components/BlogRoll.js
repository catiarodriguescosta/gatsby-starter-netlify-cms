import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import "./BlogRoll.scss"



class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="BlogGrid">
        {posts &&
          posts.map(({ node: post }) => (
            <article className="BlogPost" key={post.id}>
                  <header>
                    {post.frontmatter.featuredimage ? (
                      <div className="BlogPostThumbnail">
                        <Link to={post.fields.slug}>
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: post.frontmatter.featuredimage,
                              alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                            }}
                          />
                        </Link>
                      </div>
                    ) : null }
                    
                    <div className="BlogPostBody">
                      <Link to={post.fields.slug}>
                        <h5 className="BlogPostTitle">{post.frontmatter.title}</h5>
                      </Link>
                    </div>

                  </header>

                  <div className="BlogPostData">
                        
                        <b>{post.frontmatter.serving_syns}</b>
                        <span> syn (s) per serving &nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
                        <b>{post.frontmatter.total_syns}</b>
                        <span> syn (s) per total</span>

                        {/* { (post.frontmatter.classification === "free" || post.frontmatter.classification === "" )  ? null : (
                          <span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
                         )}
                        {post.frontmatter.classification === "free" ? null : (
                          post.frontmatter.serving_syns,
                          <span>syn (s) <em>per serving</em> &nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
                        )}
                        {post.frontmatter.classification === "free" ? null : (
                          post.frontmatter.total_syns,
                          <span>syn (s) <em>per total</em></span>
                        )} */}
                  </div>
                
              </article>
          ))}

      </section>
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
          limit: 3
          filter: { frontmatter: { templateKey: { eq: "recipe-post" } } }
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
                total_syns
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 400, quality: 100) {
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
