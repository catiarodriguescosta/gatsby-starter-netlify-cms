import React from 'react'

import Layout from '../../components/Layout'
import ContentRegion from '../../components/ContentRegion'
import Hero from '../../components/Hero'
import styled from 'styled-components'




export default class RecipesIndexPage extends React.Component {
  render() {
    return (
      <Layout>

        <Hero
            Page = "Slimming World"
            ImgSrc = "/img/blog-index.jpg"
            Heading= "a few rules a day..."
            SubHeading= "keeps you in the right way!"                  
        />

        <section className="section">
            <div className="o-container">

            <ContentRegion 
                Heading= "What is Slimming World?" 
                Text="Slimming World is ..."
            />

            {/*             
            // speed free all columns
            // free all columns
            // limited cheese and cereals // 50% 50%
            // syns // all columns 
            */}
              

            </div>
        </section>

      </Layout>
    )
  }
}
