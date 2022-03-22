import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Blog1 from '../../Images/Blog1.jpg';
import Blog2 from '../../Images/Blog2.jpg'
import Blog3 from '../../Images/Blog3.jpg'



const BlogLink = () => {
  return (
    <Container>
        <TitleContain>
            Check out our Latest <span>Blogs</span>
        </TitleContain>
        <ContainerWrapper>
            <BlogCard>
                <TextHold>
                    <TextWrap>
                        <HeadHold>Donating to Charity</HeadHold>
                        <p>
                            Text buttons are typically used for less-pronounced actions, 
                            including those located: in dialogs, in cards. In cards, text 
                            buttons help maintain an emphasis on card content.
                        </p>
                        <ButtomHold>
                            <p>Posted January 4 2022</p>
                            <Button variant="contained" color="success">Read More</Button>
                        </ButtomHold>
                    </TextWrap>
                </TextHold>
            </BlogCard>

            <BlogCard2>
                <TextHold>
                    <TextWrap>
                        <HeadHold>Donating to Charity</HeadHold>
                        <p>
                            Text buttons are typically used for less-pronounced actions, 
                            including those located: in dialogs, in cards. In cards, text 
                            buttons help maintain an emphasis on card content.
                        </p>
                        <ButtomHold>
                            <p>Posted January 3 2022</p>
                            <Button variant="contained" style={{backgroundColor:"#25AAE2"}}>Read More</Button>
                        </ButtomHold>
                    </TextWrap>
                </TextHold>
            </BlogCard2>

            <BlogCard3>
                <TextHold>
                    <TextWrap>
                        <HeadHold>Donating to Charity</HeadHold>
                        <p>
                            Text buttons are typically used for less-pronounced actions, 
                            including those located: in dialogs, in cards. In cards, text 
                            buttons help maintain an emphasis on card content.
                        </p>
                        <ButtomHold>
                            <p>Posted January 1 2021</p>
                            <Button variant="contained" style={{backgroundColor:"#EE5728"}}>Read More</Button>
                        </ButtomHold>
                    </TextWrap>
                </TextHold>
            </BlogCard3>
        </ContainerWrapper>
    </Container>
  )
}

export default BlogLink;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
`
const TitleContain = styled.h2`
    font-weight: 500;
    font-size: 30px;
    line-height: 45px;

    span{
        color: #003399;
    }

    @media screen and (max-width: 425px){
        font-size: 20px;
        line-height: 45px;
    }
`

const ContainerWrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const BlogCard = styled.div`
    width: 350px;
    height: 380px;
    border-radius: 8px;
    background: url(${Blog1});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 20px;

    @media screen and (max-width){
        width: 90%;
        margin: 0;
        margin-top: 15px;
    }
`
const TextHold = styled.div`
    width: 100%;
    height: 55%;
    color: white;
    background: #003399;
    opacity: 0.8;
    border-radius: 0 0 8px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0 10px 0;

    @media screen and (max-width: 425px){
        height: auto;
    }
`
const TextWrap = styled.div`
    height: 90%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`

const HeadHold = styled.div`
    font-weight: 500;
    font-size: 30px;
    line-height: 45px;
    color: white;

    @media screen and (max-width: 425px){
        font-size: 20px;
        line-height: 45px;
    }
`
const ButtomHold = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    Button{
        height: 30px;
        font-size: 12px;

        @media screen and (max-width: 325px){
            font-size: 10px;
            width: 60px;
        }
    }
`

const BlogCard2 = styled.div`
     width: 350px;
    height: 380px;
    border-radius: 8px;
    background: url(${Blog2});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 20px;

    @media screen and (max-width){
        width: 90%;
        margin: 0;
        margin-top: 15px;
    }
`
const BlogCard3 = styled.div`
     width: 350px;
    height: 380px;
    border-radius: 8px;
    background: url(${Blog3});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 20px;

    @media screen and (max-width){
        width: 90%;
        margin: 0;
        margin-top: 15px;
    }
`