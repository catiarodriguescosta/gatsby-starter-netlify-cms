import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import RecipePost from "./RecipePost"
import "./BlogRoll.scss"
import FilterCheckbox from './FilterCheckbox'


class BlogRollWithFilters extends React.Component {

  state={
    filters: [    
      [],
      [],
      [],
    ]
  }

  updateFilters = ( e, filterGroupIndex, value) => {
    let filtersCopy = [...this.state.filters];

    if (filtersCopy[filterGroupIndex].length > 0){

      if ( filtersCopy[filterGroupIndex].includes(value) ) {
        const newArray = this.state.filters[filterGroupIndex].filter(filter => filter !== value);
        filtersCopy[filterGroupIndex]= newArray;
        this.setState({ filters: filtersCopy });
      }
      else {
        const newArray = [...filtersCopy[filterGroupIndex]];
        newArray.push(value);
        filtersCopy[filterGroupIndex]= newArray;
        this.setState({filters: filtersCopy});
      }
    }
    else {
      const newArray = [value];
      filtersCopy[filterGroupIndex]= newArray;
      this.setState({filters: filtersCopy});
    }

  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const allMealTypesAvailable= [{ label: "Breakfast", value: "Breakfast" }, { label: "Appettizer", value: "Appettizer" }, { label: "Main Meal", value: "Main" }, { label: "Dessert", value: "Dessert" }, { label: "Snack", value: "Snack" }]
    const allSynsCategoriesAvailable = [{ label: "Free", value: "free" }, { label: "Very Low Syns", value: "very_low_syns" }, { label: "Low Syns", value: "low_syns" }, { label: "No Category", value: "none" }];
    const allDietariesAvailable = [ { label: "No Refined Sugar", value: "norefinedsugar" }, { label: "Gluten Free", value: "glutenfree" }, { label: "Dairy Free", value: "dairyfree" }, { label: "Vegetarian", value: "vegetarian" }, { label: "Vegan", value: "vegan" } ];
    //const allTags = posts.reduce();

    let filteredPosts = [...posts];
    if (this.state.filters[0].length !== 0 || this.state.filters[1].length !== 0 || this.state.filters[2].length !== 0) {
      
      if (this.state.filters[0].length > 0 ){
        filteredPosts = filteredPosts.filter( (post) =>{
          const match = [];
          this.state.filters[0].forEach( 
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
          return false;
        });
      }

      if (this.state.filters[1].length > 0 ){ 
        filteredPosts = filteredPosts.filter( (post) =>{
          const match = [];
          this.state.filters[1].forEach( 
            (filterBySyns) => 
              {
                if (filterBySyns === post.node.frontmatter.syn_category) { 
                  match.push(filterBySyns);
                } 
              }
          )
          if (match.length > 0) {
            return true;
          }
          return false;
        });
      }

      if (this.state.filters[2].length > 0 ){
        /*filteredPosts = filteredPosts.filter( (post) =>{
          const match = [];
          this.state.filters[0].forEach( 
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
          return false;
        });*/
      }
  

  }


    return (

      <section>

        <div className="BlogFilters">

          <div className="FilterGroup">
            <div className="FilterGroupTitle">COURSE</div>
            { 
              allMealTypesAvailable &&
              allMealTypesAvailable.map(( mealType, index ) => (
                <FilterCheckbox key={index} label={ mealType.label } onChangeCheckbox={(e) => this.updateFilters(e, 0, mealType.value)}/>
              ))
            }
          </div>
          <div className="FilterGroup">
            <div className="FilterGroupTitle">SYN CLASSIFICATION</div>
            { 
              allSynsCategoriesAvailable &&
              allSynsCategoriesAvailable.map(( synCategory, index ) => (
                <FilterCheckbox key={index} label={ synCategory.label }  onChangeCheckbox={(e) => this.updateFilters(e, 1, synCategory.value )}/>
              ))
            }
          </div>
          <div className="FilterGroup">
            <div className="FilterGroupTitle">DIETARY & LIFESTYLE</div>
            { 
              allDietariesAvailable &&
              allDietariesAvailable.map(( synCategory, index ) => (
                <FilterCheckbox key={index} label={ synCategory.label }  onChangeCheckbox={(e) => this.updateFilters(e, 2, synCategory.value )}/>
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
