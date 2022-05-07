import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

import { Button } from "@mui/material";

const OurStory = () => {
  return (
    <>                                                             
    <Container>
        <Wrapper>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Video url='https://www.youtube.com/watch?v=b0pzF2N_0Gk' />
            <br/>
            <a href='/about' style={{textDecoration:'none'}}><Button variant="outlined" style={{color:'black', border:'1px solid #003399'}}>Watch More</Button></a> 
            </div>
          
            <Right>
                <h2>ENRICHING LIVES WITH HOPE, BRINGING JOY AND PEACE TO THE NEEDY</h2>
                <p>
                With joy, Elisha Foundation team checked on Mrs. Dorathy Balogun and Miss Amina Isah, who are both beneficiaries of Elisha Elderly care services. 
                <br/>
                Even though the Elisha Elderly care services is primary target at aged people, Amina Isah; 16 years old is able to benefit from the program because her widowed mother could not provide the needed care for her after she was diagnosed with disseminated tuberculosis, which made her emancipated and weak, thus unable to continue with her regular school activities. Amina had been a vibrant and fore student before this condition became her realities. Amina’s mum: Mrs. Aishat Isah spoke about the roles Elisha foundation played to ease their pain and burden, and to help Amina Isah return to school. 
                <br/>
                Mrs. Dorathy Balogun who is unable to walk due to her medical condition, and is mostly without adult help around, is a beneficiary of Elisha Foundation Elderly care services. She explained the amount of pain she has had and the struggles to accept to have to live in this condition of being unable to move around freely as she used to. The roles Elisha Foundation has played to help her restore her health, and to help her live more comfortably.
                </p>
            </Right>
        </Wrapper>
    </Container>
    </>
  )
}
export default OurStory;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 25px;
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width: 1024px){
            justify-content: center;
    }

    @media screen and (max-width: 768px){
            width: 90%;
            justify-content: center;
    }
` 
const Video = styled(ReactPlayer)`
        width: 60px;
        height: 350px;
        border-radius: 8px;
        outline: none;
`

const Right = styled.div`
    width: 550px;
    /* border: 1px solid lightgrey; */
    /* padding: 10px; */

    h2{
        font-size: 20px;
    }

    @media screen and (max-width: 768px){
        width: 95%;
    }
  
`