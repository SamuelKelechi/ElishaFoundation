import React from "react";
import styled from "styled-components";

const TeamCard = ({img,name,text}) =>{
    return(
        <Div>
            <Image src = {img}/>
            <Span>
                <div>{name}</div>
                <div>{text}</div>
            </Span>
        </Div>
    )
}
export default TeamCard;

const Span = styled.div`
    height:60px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    justify-content:space-around;
    align-items:center;
    font-weight:bold;
    div{
        color:#000
    }
`

const Image = styled.img`
    width:100%;
    height:85%;
    background-color:#fff;
    object-fit:cover;
    border-radius:5px;

    @media screen and (max-width:499px){
        width:100%;
        height:85%;
    }
`

const Div = styled.div`
    width:230px;
    height:90%;
    @media screen and (max-width:768px){
        width:290px;
        height:400px;
        margin-bottom:10px;
    }
    @media screen and (max-width:499px){
        width:100%;
        height:450px;
    }
`