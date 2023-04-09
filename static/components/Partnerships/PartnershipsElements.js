import styled from 'styled-components'

export const PartnershipsContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: #C73b3C;
    height: fit-content;
    
    @media screen and (max-width: 768px){
        height: fit-content;
    }
`

export const PartnershipsTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    max-width: 40%;
    margin: 48px;

    width: 100%;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 64px;
    font-weight: 800;
    color: #FFFFFF;
    font-family: 'Asap', sans-serif;
    text-align: right;

    text-shadow: 5px 2px 15px rgba(0,0,0,0.4);

    @media screen and (max-width: 480px){
        font-size: 24px;
        text-align: center;
    }
    @media screen and (max-width: 920px){
        font-size: 48px;
        text-align: center;
    }
`

export const Subtitle = styled.p`
    margin-bottom: 8px;
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    color: #fff;

    text-align: right;
    line-height: 1.5;
`

export const ButtonWrapper = styled.div`
    max-width: 20%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 24px;
`

export const ImgWrapper = styled.div`
    max-width: 60%;
`

export const ImgBg = styled.img`
    max-width: 100%;
    object-fit: cover;
`