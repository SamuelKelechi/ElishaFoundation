import React from 'react';
import BlogLink from './BlogLink/BlogLink';
import Gallery from './GalleryHold/Gallery';
import OurImpact from './ImpactHold/OurImpact';
import Mission from './MissionHold/Mission';
import OurStory from './OurStory/OurStory';
import { Slide } from './Slider/Slide';
import Support from './Support/Support';
import { Volunteer } from './Volunteer/Volunteer';

const Home = () => {
  return (
    <>
        <Slide />
        <Mission />
        <br/>
        <br/>
        <OurImpact />
        <br/>
        <OurStory />
        <br/>
        <Support />
        <br/>
        <br/>
        <Volunteer />
        <br/>
        <BlogLink />
        <br/>
        <Gallery />
        <br/>
        <br/>
        <br/>
        <br/>
    </>
  )
}

export default Home;
