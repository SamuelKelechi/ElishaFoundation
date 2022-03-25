import React from "react";
import styled from "styled-components";
import img from "./image/pexels-lagos-food-bank-initiative-8060425.jpg"
import Card from "./Card"
import OurTeam from "./OurTeam"
import Icon1 from "../Images/icon1.png"
import Icon2 from "../Images/icon2.png"
import Icon3 from "../Images/icon3.png"



const AboutPage = () =>{
    return(
        <Content>
            <br/>
            <br/>
            <br/>
            <br/>
            <LandingPage>
                <Image src = {img}/>
                <OverLayer>
                    <Span>ABOUT US</Span>
                    <Button>Donate</Button>
                </OverLayer>
            </LandingPage>
            <Cards>
                <br/>
                <Card 
                    discription="Our vision is buliding people with dignity and self-worth.Every human being should have the 
                    same opportunity. More than 100 million Nigerians lack access to basic amenities-from clean were and 
                    electricity quility education and liberty to participatein the economy, as equal cityzens. We are about 
                    changing these phenomena, We belive everyone should be able to love with dignity. without dependence. We are 
                    a Non-Govermental Organization, based in Lageos Nigeria.We strive to protectand feed th poor, advocate and
                    elighten communities, empower young people, serve as the voice to the voiceless, we give grants and schoolarship,
                    we serve as an outstretched arm of God, we being succer and hope to the need." 
                    Title="OUR VISION" 
                    cl="#003399" 
                    icon={Icon1}
                    Info="At the core of our values, is the utmost
                    goal of making individual lives, wether old or young,
                    and communities of people, better than we meet it."
                    text="OUR VISION"
                />
                <br/>
                <Card 
                    discription="Our vision is buliding people with dignity and self-worth.Every human being should have the 
                    same opportunity. More than 100 million Nigerians lack access to basic amenities-from clean were and 
                    electricity quility education and liberty to participatein the economy, as equal cityzens. We are about 
                    changing these phenomena, We belive everyone should be able to love with dignity. without dependence. We are 
                    a Non-Govermental Organization, based in Lageos Nigeria.We strive to protectand feed th poor, advocate and
                    elighten communities, empower young people, serve as the voice to the voiceless, we give grants and schoolarship,
                    we serve as an outstretched arm of God, we being succer and hope to the need." 
                    Title="OUR MISION" 
                    cl="#25AAE2" 
                    icon={Icon2}
                    Info="At the core of our values, is the utmost
                    goal of making individual lives, wether old or young,
                    and communities of people, better than we meet it."
                    text="OUR MISSION"
                    fd="row-reverse"
                    />
                    <br/>
                <Card 
                    discription="Our vision is buliding people with dignity and self-worth.Every human being should have the 
                    same opportunity. More than 100 million Nigerians lack access to basic amenities-from clean were and 
                    electricity quility education and liberty to participatein the economy, as equal cityzens. We are about 
                    changing these phenomena, We belive everyone should be able to love with dignity. without dependence. We are 
                    a Non-Govermental Organization, based in Lageos Nigeria.We strive to protectand feed th poor, advocate and
                    elighten communities, empower young people, serve as the voice to the voiceless, we give grants and schoolarship,
                    we serve as an outstretched arm of God, we being succer and hope to the need." 
                    Title="OUR VOLUNTEERS/TEAM" 
                    cl="#3AB54A" 
                    icon={Icon3}
                    Info="At the core of our values, is the utmost
                    goal of making individual lives, wether old or young,
                    and communities of people, better than we meet it."
                    text="VOLUNTEER"
                />
            </Cards>
          
            <br />
            <br />

            <OurTeam/>
        </Content>
    );
};
export default AboutPage;

const Cards = styled.div`
    width:100%;
    /* height:100%; */
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
`

const Button = styled.button`
    width:100px;
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
`

const Span = styled.div`
    font-size:25px;
    color:#ffff;
    font-weight:bold;
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
`

const Image = styled.img`
    width:100%;
    height:400px;
    object-fit:cover;
    position: absolute;
`

const LandingPage = styled.div`
    width:100%;
    height:400px;
    background-color:blue;
`

const Content = styled.div`
    width:100%;
    min-height:100vh;
    height:100%;
`