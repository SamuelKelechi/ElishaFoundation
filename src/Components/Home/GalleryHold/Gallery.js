import React from 'react';
import ImageGallery from 'react-image-gallery';
import styled from 'styled-components';

const images = [
    {
        img: '../../Images/bg1.jpg',
    }
]

const Gallery = () => {
  return (
    <MainContainer>
        <Title>Our Event Gallery</Title>
        <GalleryWrap>
            <FirstHold originalHeight='500px' items={images} />
        </GalleryWrap>
    </MainContainer>
  )
}

export default Gallery;

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.h2`
    font-weight: 500;
    font-size: 40px;
    line-height: 45px;
    color: #003399;
 

    @media screen and (max-width: 425px){
        font-size: 20px;
        line-height: 45px;
    }
`
const GalleryWrap = styled.div`
    width: 90%;
    align-items: center;
    display: flex;
    flex-direction: column;
`
const FirstHold = styled(ImageGallery)`
    width: 100%;
    height: 300px;
`