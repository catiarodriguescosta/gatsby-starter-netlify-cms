import React from 'react'

import Layout from '../../components/Layout'
//import BlogRoll from '../../components/BlogRoll'
import Hero from '../../components/Hero'
import BlogRollWithFilters from '../../components/BlogRollWithFilters'




export default class RecipesIndexPage extends React.Component {
  render() {
    return (
      <Layout>

        <Hero
            Page = "recipes"
            ImgSrc = "/img/blog-index.jpg"
            Heading= "a few recipes today..."
            SubHeading= "keeps you in the right way!"                  
        />




        <section className="section">
            <div className="o-container">

              <BlogRollWithFilters />

            </div>
        </section>

      </Layout>
    )
  }
}
