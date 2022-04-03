import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player'

const OurStory = () => {
  return (
    <>  
    <Container>
        <Wrapper>
            <Video url='https://www.youtube.com/watch?fbclid=IwAR0jYnV4ghaMGodIh95CJZ8_xt5u9UHHWvi2GGQuK9kuFTyJD-DmItgQFRo&v=4SN88fFAJp8&feature=youtu.be' />
            <Right>
                <h2>Our Story</h2>
                <p>

                </p>
            </Right>
        </Wrapper>
    </Container>
    </>
  )
}
export default OurStory;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 15px;
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and (max-width: 768px){
            width: 90%;
            justify-content: center;
    }
` 
const Video = styled(ReactPlayer)`
        width: 60px;
        height: 350px;
        margin: 20px;
        border-radius: 8px;
        outline: none;
`

const Right = styled.div`
    width: 350px;
    margin: 20px;
    h2{
        font-size: 25px;
    }

    @media screen and (max-width: 768px){
        width: 90%;
    }
    @media screen and (max-width: 425px){
        width: 100%;
        margin-top: -60px;
    }
    @media screen and (max-width: 320px){
        margin-top: -80px;
    }
`