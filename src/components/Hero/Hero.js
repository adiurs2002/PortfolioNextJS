import React from 'react';

import { Section, SectionText, SectionTitle,SectionDivider } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        Adithya Urs's Portfolio
      </SectionTitle>
      <SectionDivider/>
      <SectionText style={{marginTop:"10px"}}>
         I Am <br/>
         A Full-Stack React.js Dev <br/> 
         And React Native Dev
      </SectionText>
      <Button onClick={props.handleClick}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;