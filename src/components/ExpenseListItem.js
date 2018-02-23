import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import styled from "styled-components";


const LinkItem = styled(Link) `
    border: 1px solid green;  
    border-top: none;
    display:flex;
    flex-direction: column;
    color: green;
    padding:  ${props => props.theme.ssize};
    text-decoration: none;
    transition: background .3s ease;
    &:hover{
        background:  ${props => props.theme.offWhite};
    }
    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
        align-items:center;
        flex-direction: row; 
        justify-content: space-between;
        padding:  ${props => props.theme.msize};
    }  
`;

const ListTitle = styled.h3`
    margin: 0;
    word-break: break-all;
`;

const ListSubTitle = styled.span`
    color:  ${props => props.theme.grey};
    font-size: 1.4rem;
`;

const ListData = styled.h3`
    margin: ${props => props.theme.ssize} 0 0 0;
    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
        margin: 0;
        padding-left: ${props => props.theme.ssize};
    }
`;


export default ({ id, description, amount, createdAt }) => (
    <LinkItem to={`/edit/${id}`}>
        <div>
            <ListTitle>{description}</ListTitle>
            <ListSubTitle>{moment(createdAt).format('MMMM  Do, YYYY')} </ListSubTitle>
        </div>
        <ListData>
            {numeral(amount / 100).format('$0,0.00')}
        </ListData>
    </LinkItem>
);
