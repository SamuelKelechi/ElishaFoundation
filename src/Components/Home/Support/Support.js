import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Donate from '../../Images/donate.jpg'

const Support = () => {
  return (
   <MainContainer>
       <ContainerWrapper>
            <Card2>
               <h2>Your Support Will Help Us Reach More <span>Vulnerable</span> People</h2>
               <p>
                   We believe everyone should be able to live with dignity, without 
                   dependence. We are a Non-Governmental Organization, based in Lagos 
                   Nigeria. We strive to protect and feed the poor, advocate and enlighten 
                   communities, empower young people, serve as the voice to the voiceless, 
                   we give grants and scholarship, we serve as an outstretched arm of God, 
                   we bring succor and hope to the need
                </p>
                <Button variant="contained" color="success">Donate</Button>
            </Card2>
            <Card1 src={Donate}/>
       </ContainerWrapper>
   </MainContainer>
  )
}

export default Support;

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 15px;
`

const ContainerWrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    @media screen and (max-width: 860px){
        justify-content: center;
    }
`

const Card1 = styled.img`
    width: 562px;
    height: 352px;
    border-radius: 8px;
    object-fit: cover;
    object-position: center;

    @media screen and (max-width: 425px){
        width: 100%;
    }
`

const Card2 = styled.div`
    width: 562px;
    height: 352px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    span{
            color: #EE5728;
        }

    h2{
        font-weight: 500;
        font-size: 38px;
        line-height: 45px;
        color: #505050;
    }

    Button{
        background: #003399;
        border-radius: 8px;
    }

    @media screen and (max-width: 860px){
      margin-bottom: 25px;
    }

    @media screen and (max-width: 425px){
        width: 100%;
        height: 380px;
        justify-content: space-evenly;

        h2{
        font-size: 23px;
        line-height: 30px;
        }

    }
`