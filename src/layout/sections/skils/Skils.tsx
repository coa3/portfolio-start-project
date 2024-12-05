import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skils = () => {
    return (
        <StyledSkils>
            <SectionTitle>My Skills</SectionTitle>
           <FlexWrapper wrap={'wrap'} justify={'space-between'}>
               <Skill
                   iconId={'html5'}
                   title={'html5'}
                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
               <Skill
                   iconId={'css'}
                   title={'css3'}
                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
               <Skill
                   iconId={'react'}
                   title={'React'}
                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
               <Skill
                   iconId={'typesc'}
                   title={'typescript'}
                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
               <Skill
                   iconId={'styled'}
                   title={'styled components'}
                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
               <Skill
                   iconId={'webDesign'}
                   title={'WEB DESIgN'}
                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>

           </FlexWrapper>
        </StyledSkils>
    );
};

const StyledSkils = styled.section`
background-color: pink;
    min-height: 100vh; 

`