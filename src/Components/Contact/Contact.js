import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
      <>
      <br/>
      <br/>
      <br/>
      <br/>
        <Content>
            <LandingPage>
                <Image src = {img}/>
                <OverLayer>
                    <Span>CONTACT US</Span>

        </Content>
    </>
  )
}

export default Contact;

const Content = styled.div`
    width:100%;
    min-height:100vh;
    height:100%;

`

const LandingPage = styled.div`
    width:100%;
    height:400px;
    background-color:blue;

const Image = styled.img`
    width:100%;
    height:400px;
    object-fit:cover;

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