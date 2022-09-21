import React from 'react'
import { VisionContainer, VisionHeader, VisionHeaderWrapper, VisionSubHeader, VisionTopLine, VisionWrapper } from './VisonElements'

const Vision = () => {
  return (
    <VisionContainer>
        <VisionWrapper>
            <VisionHeaderWrapper>
                <VisionTopLine> Our Vision </VisionTopLine>
                <VisionHeader> To foster a global community for Singaporean culture within UCLA </VisionHeader>
                <VisionSubHeader> we are a welcoming community for people of all backgrounds, introducing the Singaporean culture to the broader student body at UCLA </VisionSubHeader>
            </VisionHeaderWrapper>
        </VisionWrapper>
    </VisionContainer>
  )
}

export default Vision