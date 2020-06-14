import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import RecipePost from "./RecipePost"
import "./BlogRoll.scss"
import FilterCheckbox from './FilterCheckbox'


class BlogRollWithFilters extends React.Component {

  state={
    filters: [    
      {
        mealType: [
          
        ],
      },
      {
        synCategory: [],
      },
      {
        tags: [],
      }
    ]
    
  }

  updateMealTypeFilters = ( e, value) => {
    let filtersCopy = [...this.state.filters];

    if (this.state.filters[0].mealType.length > 0){

      if ( this.state.filters[0].mealType.includes(value) ) {
        const newArray = this.state.filters[0].mealType.filter(filter => filter !== value);
        filtersCopy[0]= {mealType: newArray};
        this.setState({ filters: filtersCopy });
      }
      else {
        const newArray = [...this.state.filters[0].mealType];
        newArray.push(value);
        filtersCopy[0]= {mealType: newArray};
        this.setState({filters: filtersCopy});
      }

    }
    else {
      const newArray = [value ];
      filtersCopy[0].mealType= newArray;
      this.setState({filters: filtersCopy});
    }

  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const allMealTypesAvailable= [{ label: "Breakfast", value: "Breakfast" }, { label: "Appettizer", value: "Appettizer" }, { label: "Main Meal", value: "Main" }, { label: "Dessert", value: "Dessert" }, { label: "Snack", value: "Snack" }]
    const allSynsCategoriesAvailable = [{ label: "Free", value: "free" }, { label: "Very Low Syns", value: "very_low_syns" }, { label: "Low Syns", value: "low_syns" }, { label: "No Category", value: "none" }];

    console.log(posts);
    let filteredPosts = posts.filter( (post) =>{
      if (this.state.filters[0].mealType.length > 0 ){
        const match = [];
        this.state.filters[0].mealType.forEach( 
          (filterMeal) => post.node.frontmatter.meal_type.forEach( (postMeal)=>
            {
              if (filterMeal === postMeal){
                match.push(filterMeal);
              }
            }
          )
        )
        if (match.length > 0) {
          return true;
        }
        else{
          return false;
        }
      }
      else if (this.state.filters[1].synCategory.length > 0 ){

      }

      else {
        return false;
      }
        
        
    
    });


    return (

      <section>

        <div className="BlogFilters">

          <div className="FilterGroup">
            <div className="FilterGroupTitle">MEAL TYPE</div>
            { 
              allMealTypesAvailable &&
              allMealTypesAvailable.map(( mealType, index ) => (
                <FilterCheckbox key={index} label={ mealType.label } onChangeCheckbox={(e) => this.updateMealTypeFilters(e, mealType.value)}/>
              ))
            }
          </div>
          <div className="FilterGroup">
            <div className="FilterGroupTitle">SYN CATEGORY</div>
            { 
              allSynsCategoriesAvailable &&
              allSynsCategoriesAvailable.map(( synCategory, index ) => (
                <FilterCheckbox key={index} label={ synCategory.label }  />
              ))
            }
          </div>

        </div>

        <div className="BlogGrid">
          {filteredPosts 
            && filteredPosts.map(({ node: post }) => (
              <RecipePost 
                key= {post.id}
                id= {post.id} 
                slug= {post.fields.slug} 
                featuredimage= {post.frontmatter.featuredimage} 
                title= {post.frontmatter.title} 
                servingSyns= {post.frontmatter.serving_syns}
                totalSyns = {post.frontmatter.total_syns}
                synCategory= {post.frontmatter.syn_category}
                mealType= {post.frontmatter.meal_type}
              />
            ))}
        </div>

      </section>
    )
  }
}

BlogRollWithFilters.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollFilterQuery {
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
                meal_type
                syn_category
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
    render={(data, count) => <BlogRollWithFilters data={data} count={count} />}
  />
)
