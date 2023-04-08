import React from 'react'
import { 
  VisionContainer, 
  VisionHeaderWrapper,
  Heading,
  VisionWrapper, 
  ImgTextWrapper,
  ImgText,
  ImgBg,
  TopLine
} from './VisionElements'
import img1 from "/static/images/infoSection1.jpeg"

const Vision = () => {

  const img1String = "CREATE AN INCLUSIVE SINGAPOREAN COMMUNITY AT UCLA"
  return (
    <VisionContainer>
      <VisionHeaderWrapper>
        <Heading> A HOME AWAY FROM HOME </Heading>
      </VisionHeaderWrapper>
      <VisionWrapper>
        <ImgTextWrapper>
          <TopLine> OUR VISION </TopLine>
          <ImgText> {img1String} </ImgText>
        </ImgTextWrapper>
        <ImgBg src={img1} alt="Vision" />
      </VisionWrapper>
    </VisionContainer>
  )
}

export default Vision