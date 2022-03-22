import React from 'react';
import styled from 'styled-components';
import Logo from '../Images/Logo.png'
import Phone from '../Images/phone.png'
import Email from '../Images/mail.png'
import Facebook from '../Images/facebook.png'
import Instagram from '../Images/instagram.png'
import { Button } from '@mui/material';

let date = new Date().getFullYear();
console.log(date);

const Footer = () => {
  return (
    <MainContain>
        <ContainerWrapper>
           
                <Side1>
                    <LogoHold src={Logo}/>
                    <p>
                        At the core of our values, is the utmost goal of making 
                        individual lives, whether old or young, and communities 
                        of people, better than we meet it.
                    </p>
                </Side1>
                <Side2>
                    <p>MAIN LINKS</p>
                    <div>
                        <span>HOME</span>
                        <span>ABOUT</span>
                        <span>CONTACT</span>
                        <span>BLOG</span>
                        <span>DONATE</span>
                    </div>
                </Side2>
                <Side3>
                    <p>GET IN TOUCH</p>
                    <p><img src={Phone} alt='Phone' />+2348144253138</p>
                    <p><img src={Email} alt='Email' />Edhf@gmail.com</p>
                    <b>OUR SOCIAL LINKS</b>
                    <span><img src={Facebook} alt='Facebook' /> <img src={Instagram} alt='Instagram' /></span>
                </Side3>
                <Side4>
                   <div>GET LATEST UPDATE</div>
                   <div>Email <input placeholder='Enter Email'/></div>
                   <div>
                       <Button variant="contained" color="success">Subscribe</Button>
                   </div>
                   <div></div>
                </Side4>
          
        </ContainerWrapper>
        <BottomTab>
				<Tab>
					<span>Developed by <a href="https://samuel-kelechi.web.app/" target="blank" style={{textDecoration:"none", color:"white"}}>CodeLab</a> 🚀 | © {date} All rights reserved</span>
				</Tab>
		</BottomTab>
    </MainContain>
  )
}

export default Footer;

const MainContain = styled.div`
    width: 100%;
    padding: 25px 0 0 0;
    background-color: #003399;
    color: white;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
`
const ContainerWrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;


    @media screen and (max-width: 860px){
        justify-content: space-between;
    }
`
const LogoHold = styled.img`
    width: 120px;

    @media screen and (max-width: 425px){
        width: 70px;
    }
`
const Side1 = styled.div`
  width: 200px;
  
  @media screen and (max-width: 425px){
      width: 47%;
      margin-bottom: 20px;
  }
`
const Side2 = styled.div`
  width: 200px;
  height: 230px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  div{
      display: flex;
      flex-direction: column;
      height: 160px;
      justify-content: space-around;
  }

  p{
      height: 15px;
  }

  @media screen and (max-width: 425px){
      width: 47%;
      margin-bottom: 20px;

  }
`
const Side3 = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img{
      margin-right: 5px;
  }

  @media screen and (max-width: 425px){
      width: 47%
  }
`
const Side4 = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input{
      height: 40px;
      width: 100%;
      outline: none;
      color: black;
      padding-left: 10px;
  }

  @media screen and (max-width: 425px){
      width: 47%
  }
`
const BottomTab = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-between;
	background-color: #00243a;
	color: silver;
	align-items: center;
    margin-top: 30px;
	@media screen and (max-width: 600px) {
		font-size: 10px;
	}
	/* padding: 0 15px; */
`;

const Tab = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 40px;
`;