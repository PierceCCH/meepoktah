import styled from 'styled-components'

export const VisionContainer = styled.div`
    color: #fff;
    background: #AAAAAA;
    height: fit-content;
    
    @media screen and (max-width: 768px){
        padding-top: 100px;
    }
`

export const VisionHeaderWrapper = styled.div`
    display: flex;
    background: linear-gradient(90deg, rgba(14,18,45,1) 0%, rgba(11,14,36,1) 50%, rgba(14,18,45,1) 100%);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 340px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 132px;
    font-weight: 600;
    color: #FFFFFF;
    font-family: 'Montserrat', sans-serif;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const VisionWrapper = styled.div`
    height: 800px;
`

export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.1s ease-in-out;
    filter: blur(1.2px) grayscale(0.3) hue-rotate(-30deg);

    @media screen and (max-width: 768px){
        max-width: 440px;
        margin-left: auto;
        margin-right: auto;
    }
`

export const ImgTextWrapper = styled.div`
    position: absolute;
    padding-left: 8px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 520%);
    color: #fff;
    text-align: left;
    width: 100%;
    
    z-index: 2;
`

export const ImgText = styled.h1`
    font-size: 96px;
    font-weight: 600;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    max-height: 100%;
    
    text-shadow: 5px 2px 10px rgba(0,0,0,0.6);

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const TopLine = styled.p`
    color: #FFF;
    font-size: 48px;
    line-height: 16px;
    font-weight: 700;
    margin-bottom: 24px;

    text-decoration: gold underline;
    text-underline-offset: 12px;

    text-shadow: 5px 2px 10px rgba(0,0,0,0.6);
`