import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Icon1 from '../../Images/icon1.png';
import Icon2 from '../../Images/icon2.png';
import Icon3 from '../../Images/icon3.png';

const Mission = () => {
  return (
    <>
        <ContainerHold>
            <ContainerWrap>
                <Card title='OUR MISSION' 
                para='At the core of our values, is the utmost 
                goal of making individual lives, whether old or 
                young, and communities of people, better than we meet it.'
                icon={Icon1}
                col='#003399'
                />
                <Card title='OUR VISION'
                para='At the core of our values, is the utmost 
                goal of making individual lives, whether old or 
                young, and communities of people, better than we meet it.'
                icon={Icon2}
                col='#25AAE2'
                />
                <Card title='VOLUNTEER'
                para='At the core of our values, is the utmost 
                goal of making individual lives, whether old or 
                young, and communities of people, better than we meet it.'
                icon={Icon3}
                col='#3AB54A'
                />
            </ContainerWrap>
        </ContainerHold>
    </>

  )
}

export default Mission

const ContainerHold = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 425px){
        margin-top: 90px;
    }
`

const ContainerWrap = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`
