import React from "react";
import styled from "styled-components"
import Cards from "./TeamCard"
import img1 from "./image/FB_IMG_1628174930539.jpg"

const Card = () =>{
    return(
        <Content>
            <h1>OUR TEAM</h1>
            <Wrapper>
               <Cards img={img1} name="Janet Jessy" text="Project Manager"/>
               <Cards img={img1} name="Janet Jessy" text="Project Manager"/>
               <Cards img={img1} name="Janet Jessy" text="Project Manager"/>
               <Cards img={img1} name="Janet Jessy" text="Project Manager"/>
            </Wrapper>
        </Content>
    )
}
export default Card;

const Wrapper = styled.div`
    width:88%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    justify-content:space-between;

    @media screen and (max-width:768px){
        width:88%;
        display:flex;
        justify-content:space-around;
        flex-wrap:wrap;
    }

    @media screen and (max-width:425px){
        width:88%;
        display:flex;
        justify-content:space-around;
        flex-wrap:wrap;
    }
`

const Content = styled.div`
    width:100%;
    margin-top:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    color:blue;
    background-color:rgb(55,55,55,9%);
    padding-top: 40px;
    padding-bottom: 50px;

    h1{
        color:#003399;
    }

    @media screen and (max-width:768px){
        width:100%;
        justify-content:center;
        align-items:center;
    }

    @media screen and (max-width:499px){
        width:100%;
        justify-content:center;
        align-items:center;

        h1{
            font-size:19px;
        }
    }

    @media screen and (max-width:658px){
        padding-top:20px;
    }
`