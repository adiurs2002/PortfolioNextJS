import React from 'react';
import { DiAndroid, DiFirebase, DiLinux, DiPython, DiReact, DiSafari, DiUikit, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider/>
   <SectionTitle style={{marginTop:25,marginBottom:25}}>
     Technologies
   </SectionTitle>
   <SectionDivider/>
   <SectionText>I have worked on various Technologies in the web dev world and also in mobile app world </SectionText>
   <List>
     <ListItem>
       <DiReact size="3rem"/>
       <ListContainer>
         <ListTitle>Front-end</ListTitle>
         <ListParagraph>
           Experience with <br/>
           React.js,Next.js
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiAndroid size="3rem"/>
       <ListContainer>
         <ListTitle>Mobile Application</ListTitle>
         <ListParagraph>
           Experience with <br/>
           React Native and Android (Kotlin)
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiFirebase size="3rem"/>
       <ListContainer>
         <ListTitle>Back-end</ListTitle>
         <ListParagraph>
           Experience with <br/>
           Node.js and Firestore Firebase
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiPython size="3rem"/>
       <ListContainer>
         <ListTitle>Python</ListTitle>
         <ListParagraph>
           Experience with <br/>
           Selenium,Pyautogui etc
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiLinux size="3rem"/>
       <ListContainer>
         <ListTitle>Linux</ListTitle>
         <ListParagraph>
           Experience with <br/>
           Ubuntu and Kali
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiZend size="3rem"/>
       <ListContainer>
         <ListTitle>UI/UX</ListTitle>
         <ListParagraph>
           Experience with <br/>
           Figma and Abode Spark
         </ListParagraph>
       </ListContainer>
     </ListItem>
   </List>
 </Section>
);

export default Technologies;
