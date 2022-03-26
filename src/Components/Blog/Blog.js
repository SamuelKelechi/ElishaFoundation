import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import img from "../Images/Card1.jpg";
import donate from "../Images/donate.jpg"

import Blog1 from '../Images/Blog1.jpg';
import Blog2 from '../Images/Blog2.jpg'
import Blog3 from '../Images/Blog3.jpg'

const Blog = () => {
  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
        <MainContainer>
          <LandingPage>
              <Image src = {img}/>
              <OverLayer>
                  <Span>BLOG POST</Span>
                  <p>
                    We are excited about the lives we are touching, 
                    catch up on our events
                  </p>
                  <Btn>
                    Donate
                  </Btn>
              </OverLayer>
          </LandingPage>
          <br/>
          <Updates>
            <RecentBlog>
              <Head1>Most Recent Update</Head1>
              <RecentWrapper>
                <Left src={donate} />
                <Right>
                  <h2>Our Out-reach </h2>
                  <p>
                    Our vision is: building people with dignity and self-worth. Every human being should have the same opportunity. More than 100 million Nigerians lack access to basic amenities—from clean water and electricity quality education and liberty to participate in the economy, as equal citizens. We are about changing these phenomena. We believe everyone should be able to live with dignity, without dependence. We are a Non-Governmental Organization, based in Lagos Nigeria. We strive to protect and feed the poor, advocate and enlighten communities, empower young people, serve as the voice to the voiceless, we give grants and scholarship, we serve as an outstretched arm of God, we bring succor and hope to the need
                    lack access to basic amenities—from clean water and electricity quality education and liberty to participate in the economy, as equal citizens. We are about changing these phenomena. We believe everyone should be able to live with dignity, without dependence. We are a Non-Governmental Organization, based in Lagos Nigeria. We strive to protect and feed the poor, advocate..
                  </p>
                  <Button variant="contained" color="success">Read More</Button>
                </Right>
              </RecentWrapper>
            </RecentBlog>
          </Updates>
          <br/>
          <h2>Most Popular Events</h2>
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

        </MainContainer>
    </>
  )
}

export default Blog;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2{
    width: 90%;
    padding-left: 40px;
    font-size: 25px;

  }
`

const LandingPage = styled.div`
    width:100%;
    height:400px;
    background-color:blue;

    @media screen and (max-width: 650px){
        height: 350px;
    }
`
const Image = styled.img`
    width:100%;
    height:400px;
    object-fit:cover;
    object-position: center;
    position: absolute;

    @media screen and (max-width: 650px){
        height: 350px;
    }
`
const OverLayer = styled.div`
    height:100%;
    width:100%;
    background-color:rgb(9,82,252, 40%);
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    p{
        color: white;
        text-align: center;
        font-size: 22px;
    }

    @media screen and (max-width: 650px){
        justify-content: flex-end;
        p{
        color: white;
        text-align: center;
        font-size: 19px;
        width: 98%;
      }
    }

   
`
const Btn = styled.button`
    width:120px;
    border:none;
    outline:none;
    height:40px;
    border-radius:7px;
    color:#ffff;
    background-color:#3AB54A;
    margin-top:10px;
    transition:all 590ms;
    transform:scale(1);

    :hover{
        cursor:pointer;
        transform:scale(1.10)
    }
    @media screen and (max-width: 650px){
        margin-bottom: 40px;
    }
`
const Span = styled.div`
    font-size:25px;
    color:#ffff;
    font-weight:bold;
`
const Updates = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Head1 = styled.div`
    font-size: 25px;
    font-weight: bold;
    padding-left: 40px;

   @media screen and (max-width: 425px){
    font-size: 22px;
    padding-left: 0;
   }
`

const RecentBlog = styled.div`
  width: 90%;
`

const RecentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
`

const Left = styled.img`
  width: 450px;
  height: 350px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;

  @media screen and (max-width: 650px){
    width: 100%;
  }
`

const Right = styled.div`
  width: 600px;
  
  h2{
    font-size: 25px;
    padding: 0;
  }

  @media screen and (max-width: 650px){
    width: 100%;

    h2{
    font-size: 19px;
    margin-top: 20px;
  }
  }
`

const ContainerWrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const BlogCard = styled.div`
    width: 300px;
    height: 420px;
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
    width: 300px;
    height: 420px;
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
    width: 300px;
    height: 420px;
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