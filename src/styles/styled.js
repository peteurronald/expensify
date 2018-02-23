
import styled from "styled-components";
import { css } from "styled-components";
import { Link } from 'react-router-dom';
import styledMap from 'styled-map'

let mg = 'mediumseagreen';
let blue = '#1c88bf';
let orange = 'orange';
let offWhite = '#f7f7f7';
let grey = '#666';
let fontSizeLarge = '1.8rem';
let lsize = '3.2rem';
let ssize = '1.2rem';
let msize = '1.6rem';
let desktopBreakpoint = '45rem'; 


export const theme = () => {
    return {
        main: mg.valueOf(),
        offWhite: offWhite.valueOf(),
        blue: blue.valueOf(),
        orange: orange.valueOf(),
        grey: grey.valueOf(),
        ssize: ssize.valueOf(),
        msize: msize.valueOf(),
        lsize: lsize.valueOf(),
        xlsize: '4.8rem',
        desktopBreakpoint: desktopBreakpoint.valueOf(),
        fontSizeLarge: fontSizeLarge.valueOf()
    }
};


const buttonColor = styledMap({
    primary: 'orange',
    warning: 'red',
    info: 'blue',
    default: 'white',
  });

export const ContentContainer = styled.div`
    margin: 0 auto;
    padding: 0 1.6rem;
    max-width: 80rem;
`;

export const LinkButton = styled(Link) `
    background: ${orange}; 
    border: none;
    color: white;    
    display: inline-block;
    font-weight:300;
    font-size: fontSizeLarge;
    line-height: 1;
    padding: 1.2rem;
    text-decoration: none;
`;

export const Button = styled.button`
    background: ${orange}; 
    border: none;
    color: white;    
    display: inline-block;
    font-weight:300;
    font-size: fontSizeLarge;
    line-height: 1;
    padding: 1.2rem;
    text-decoration: none;
`;




export const ActionBar = styled.div`
   margin-top: ${props => props.theme.msize};
   background:  green;  
   padding: ${props => props.theme.ssize} ${props => props.theme.msize};
`;


export const TextInput = styled.input`
    border: 1px solid #cacced;
    height: 50px;
    font-size: ${props => props.theme.fontSizeLarge};
    font-weight:300;
    padding:  ${props => props.theme.ssize};
`;

export const Select = styled.select`
    border: 1px solid #cacced;
    height: 50px;
    font-size: ${props => props.theme.fontSizeLarge};
    font-weight:300;
    padding:  ${props => props.theme.ssize};
`;

export const TextArea = styled.textarea`
    border: 1px solid #cacced;
    height: 15rem;
    font-size: ${props => props.theme.fontSizeLarge};
    font-weight:300;
    padding:  ${props => props.theme.ssize};
`;


export const PageHeader = styled.header`
    background:  #364051;
`;

export const PageHeaderTitle = styled.h1`
    color: white;
    text-decoration: none;
    margin: 0;
`;

export const SubTitle = styled.h1`
    color: black;
    text-decoration: none;
    margin: 30;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    > * {
        margin-bottom:  ${props => props.theme.msize}
    }
`;

export const FormError= styled.h4`
    margin: 0 0 ${props => props.theme.ssize} 0;
    font-style: italic;
`;




