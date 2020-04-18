import React from "react"
import PropTypes from 'prop-types'
import styled from 'styled-components'


const ContentDiv = styled.div`
    margin: 50px auto;  
    background: #FCF9EE;
    display: flex;
    flex-direction: columns;
    justify-content: center;
    align-items: center;
`
const ContentContainer = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction : column;
    align-items: center;
    justify-content: center;
`
const ContentHeading  = styled.h2`
  font-family: "abril Fatface";
  padding-bottom: 20px;
  padding-top: 20px;
`

const ContentText = styled.p`
    text-align: center;
    padding-bottom: 20px;

`

const ContentRegion = ({ Heading, Text, Background}) => (
    <div class="o-container">
        <ContentDiv>
            <ContentContainer  className={" o-container  o-container--small"}>
                <ContentHeading>
                    {Heading}
                </ContentHeading>
                <ContentText>
                    {Text}
                </ContentText>
            </ContentContainer>
        </ContentDiv>
    </div>
)

ContentRegion.propTypes = {
    Heading: PropTypes.string,
    Text: PropTypes.string,
}
  
ContentRegion.defaultProps = {
    Heading: ``,
    Text: ``,
}
export default ContentRegion;