import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import img from '../Images/Support.jpg';
import Visa from '../Images/Visa.png'


const Submit= () => {
  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <MainContain>
       <LandingPage>
            <Image src = {img}/>
            <OverLayer>
                <Span>CHANGE THE LIFE OF THOSE <br/> WHO HAVE NO HOPE</Span>
                <p>
                   Help us reach more children and families in need
                </p>
            </OverLayer>
        </LandingPage>

        <DonateHold>
            <DonateContent>
                <Top>Donate Now</Top>
                <Avat src={Visa} alt='donate' />
                <p>Please enter your card information</p>
                <FomWrapper>
                    <Left>
                        <label>Amount</label><br/><input type='number' placeholder='Enter Amount to Debit'/>
                        <br/>
                        <br/>
                        <label>Card Number</label><br/><input type='number' placeholder='Enter Card Number'/>
                        <br/>
                        <br/>
                        <label>Expiration Date</label><br/><input type='date' />
                        <br/>
                        <br/>
                    </Left>
                    <Right>
                        <label>Name on Card</label><br/><input type='string' placeholder='Enter Name on Your Card'/>
                        <br/>
                        <br/>
                        <label type='email' >Email</label><br/><input placeholder='Enter Your Email'/>
                        <br/>
                        <br/>
                        <label>Country</label><br/><input type='country' placeholder='Enter Name of Country'/>
                    </Right>
                </FomWrapper>
                <Button variant="contained" >Donate now</Button>
            </DonateContent>
        </DonateHold>
        <br/>
     </MainContain>
    </>
  )
}

export default Submit;

const MainContain = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LandingPage = styled.div`
    width:100%;
    height:500px;
    background-color:blue;

    @media screen and (max-width: 650px){
        height: 350px;
    }
`
const Image = styled.img`
    width:100%;
    height:500px;
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
const Span = styled.div`
    font-size:40px;
    color:#ffff;
    font-weight:bold;
    text-align: center;

    @media screen and (max-width: 425px){
    font-size:22px;
    }
`
const DonateHold = styled.div`
    width: 80%;
    padding: 60px 0 60px 0;
    background-color: #003399;
    margin-top: -120px;
    z-index: 100;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px){
        width: 90%;
    }
    @media screen and (max-width: 650px){
        width: 80%;
        margin-top: 10px;
    }
    @media screen and (max-width: 425px){
        width: 100%;
    }
`
const DonateContent = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        width: 100%;
        color: white;
        font-size: 20px;
        padding-left: 40px;
    }

    Button{
        background-color: #25AAE2;
        height: 40px;
        width: 300px;
    }

    @media screen and (max-width: 768px){
        width: 90%;

        Button{
            margin-top: 30px;
        }

        p{
            text-align: center;
            padding: 0;
        }
    }

    @media screen and (max-width: 425px){
          p{
            font-size: 17px;
        }
    }
`

const Top = styled.h2`
    color: white;
    font-size: 35px;
    line-height: 45px;

    @media screen and (max-width: 425px){
        font-size: 25px;
        line-height: 25px;
    }
`

const Avat = styled.img`
    @media screen and (max-width: 425px){
        width: 80%;
    }
`

const FomWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const Left = styled.div`
    width: 350px;
    margin: 30px;
    color: white;

    input{
        width: 100%;
        height: 40px;
        color: black;
        border-radius: 8px;
        outline: none;
        padding-left: 15px;
    }

    @media screen and (max-width: 768px){
        margin: 0
    }
`

const Right = styled.div`
        width: 350px;
        margin: 30px;
        color: white;

    input{
        width: 100%;
        height: 40px;
        color: black;
        border-radius: 8px;
        outline: none;
        padding-left: 15px;
    }

    @media screen and (max-width: 768px){
        margin: 0
    }
`
