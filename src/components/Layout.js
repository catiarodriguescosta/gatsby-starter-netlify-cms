import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.scss'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import { createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    --header-bg-color: #001a2d;
  }
  
  $mq-mob: 480px;
  $mq-mob--sml: 375px;
  $mq-mob--med: 560px;
  $mq-mob--lrg: 640px;

  $mq-tab: 768px;
  $mq-tab--sml: 765px;
  $mq-tab--lrg: 820px;

  $mq-desk: 960px;
  $mq-desk--med: 1024px;
  $mq-desk--lrg: 1120px;
  $mq-desk--xlrg: 1400px;

`

const TemplateWrapper = ({ children }) => {
  const { title, description, keywords, google_analytics } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
        { google_analytics ? (
          <script>
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${google_analytics}');
            `}
          </script>
        ) : null}
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
