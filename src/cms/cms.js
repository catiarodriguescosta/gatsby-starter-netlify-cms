import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import RecipePostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

import React from 'react'
import { StyleSheetManager } from 'styled-components'

//Component used to Enable netlify CMS to apply the styles added through styled-components
class CSSInjector extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      iframeRef: ''
    }
  }

  componentDidMount() {
    const iframe = document.querySelector(".nc-previewPane-frame")
    const iframeHeadElem = iframe.contentDocument.head;
    this.setState({ iframeRef: iframeHeadElem })
  }

  render() {
    return (
      <div>
        { this.state.iframeRef && (
          <StyleSheetManager target={this.state.iframeRef}>
            { this.props.children }
          </StyleSheetManager>
        )}
      </div>
    )
  }
}

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', props => (
  <CSSInjector>
    <IndexPagePreview {...props} />
  </CSSInjector>
))
CMS.registerPreviewTemplate('about', props => (
    <CSSInjector>
      <AboutPagePreview {...props} />
    </CSSInjector>
  )
)
CMS.registerPreviewTemplate('products', props => (
    <CSSInjector>
      <ProductPagePreview {...props} />
    </CSSInjector>
  )
)
CMS.registerPreviewTemplate('recipe', props => (
    <CSSInjector>
      <RecipePostPreview {...props} />
    </CSSInjector>
  )
)

