import React from "react";
import styled from "styled-components";
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

                </OverLayer>
            </LandingPage>
            <Cards>
                <br/>
                <Card 

                    text="OUR VISION"
                />
                <br/>
                <Card 

                    text="OUR MISSION"
                    fd="row-reverse"
                    />
                    <br/>
                <Card 

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