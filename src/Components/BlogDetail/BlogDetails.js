import { Button } from 'antd';
import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import Blog from '../Images/bg1.jpg';
import Blog1 from '../Images/Blog1.jpg';
import Blog2 from '../Images/Blog2.jpg';
import Blog3 from '../Images/Blog3.jpg';
import {useParams, Link} from "react-router-dom";
import { db } from '../../Base';
import {collection, getDocs, query} from "firebase/firestore";


function BlogDetails() {
    const {id} = useParams();
    const [getBlog, setGetblog] = useState([])


    useEffect(() => {
        async function getBlog(){
            const querySnapshot = await getDocs(query(collection(db, `blog/${(id)}`)));
            let dataArray = []
            querySnapshot.forEach((doc) => {
                dataArray.push({...doc.data(), id: doc.id});
            });
            setGetblog(dataArray)
            console.log(id)
        }
        getBlog();
      }, [id]);

  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <MainContainer>
        <ContainerWrapper>
                    <Title>Our Out-reach</Title>
                    <Avat src={Blog} />
                    <p>
                    Our vision is: building people with dignity and self-worth. Every human being should have the same opportunity. More than 100 million Nigerians lack access to basic amenities—from clean water and electricity quality education and liberty to participate in the economy, as equal citizens. We are about changing these phenomena. We believe everyone should be able to live with dignity, without dependence. We are a Non-Governmental Organization, based in Lagos Nigeria. We strive to protect and feed the poor, advocate and enlighten communities, empower young people, serve as the voice to the voiceless, we give grants and scholarship, we serve as an outstretched arm of God, we bring succor and hope to the need
lack access to basic amenities—from clean water and electricity quality education and liberty to participate in the economy, as equal citizens. We are about changing these phenomena. We believe everyone should be able to live with dignity, without dependence. We are a Non-Governmental Organization, based in Lagos Nigeria. We strive to protect and feed the poor, advocate
                    </p>
                    <p>
                    Our vision is: building people with dignity and self-worth. Every human being should have the same opportunity. More than 100 million Nigerians lack access to basic amenities—from clean water and electricity quality education and liberty to participate in the economy, as equal citizens. We are about changing these phenomena. We believe everyone should be able to live with dignity, without dependence. We are a Non-Governmental Organization, based in Lagos Nigeria. We strive to protect and feed the poor, advocate and enlighten communities, empower young people, serve as the voice to the voiceless, we give grants and scholarship, we serve as an outstretched arm of God, we bring succor and hope to the need
lack access to basic amenities—from clean water and electricity quality education and liberty to participate in the economy, as equal citizens. We are about changing these phenomena. We believe everyone should be able to live with dignity, without dependence. We are a Non-Governmental Organization, based in Lagos Nigeria. We strive to protect and feed the poor, advocate
                    </p>
                    <BtnHold>
                        <Button>Back</Button>
                    </BtnHold>

            <Suggest>
                Suggested Post
            </Suggest>

            <CardWrapper>
                <BlogCard>
                    <TextHold>
                        <TextWrap>
                            <HeadHold>Donating to Charity</HeadHold>
                            <p>
                                Text buttons are typically used for less-pronounced actions, 
                                including those located: in dialogs, in cards.
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
                                including those located: in dialogs, in cards.
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
                                including those located: in dialogs, in cards.
                            </p>
                            <ButtomHold>
                                <p>Posted January 1 2021</p>
                                <Button variant="contained" style={{backgroundColor:"#EE5728"}}>Read More</Button>
                            </ButtomHold>
                        </TextWrap>
                    </TextHold>
                </BlogCard3>
            </CardWrapper>
        </ContainerWrapper>
    </MainContainer>
    </>
  )
}

export default BlogDetails;

const MainContainer = styled.div`
    width: 100%;
    height: auto;
    /* min-height: 100vh; */
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
`
const ContainerWrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        margin-top: 20px;
        font-size: 17px;
        line-height: 23px;
    }

    @media screen and (max-width: 768px){
        width: 80%;
    }

    @media screen and (max-width: 425px){
        width: 90%;
    }
`
const Title = styled.div`
    width: 100%;
    height: 50px;
    font-size: 25px;
    font-weight: bold;
    margin-top: 20px;
`

const Avat = styled.img`
    width: 100%;
    height: 450px;
    object-fit: cover;
    object-position: center;
    border-radius: 8px;

    @media screen and (max-width: 768px){
        height: 350px;
    }
`
const BtnHold = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    Button{
        background-color: #EE5728;
        width: 150px;
        margin-right: 20px;
        border-radius: 8px;
        color: white;
    }
`
const Suggest = styled.div`
    width: 100%;
    height: 50px;
    font-size: 25px;
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight :500;
    line-height:44.53px;
`

const CardWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const BlogCard = styled.div`
    width: 320px;
    height: 420px;
    border-radius: 8px;
    background: url(${Blog1});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: flex-end;

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
    align-items: center;

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
    width: 320px;
    height: 420px;
    border-radius: 8px;
    background: url(${Blog2});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    @media screen and (max-width){
        width: 90%;
        margin: 0;
        margin-top: 15px;
    }
`
const BlogCard3 = styled.div`
    width: 320px;
    height: 420px;
    border-radius: 8px;
    background: url(${Blog3});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    @media screen and (max-width){
        width: 90%;
        margin: 0;
        margin-top: 15px;
    }
`