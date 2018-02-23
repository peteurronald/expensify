import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';
import styled from "styled-components";
import {ContentContainer, PageHeader, PageHeaderTitle} from '../styles/styled';


const HeaderContent= styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 1.2rem 0;
`;


const LogoutButton = styled.button`
    background: none;
    color: white;
    border: 2px solid ${props => props.theme.main};
`;


export const Header = ({startLogout}) => (
    <PageHeader>
        <ContentContainer>
           <HeaderContent>  
                 <Link  to="/dashboard"  >
                   <PageHeaderTitle>Expensify</PageHeaderTitle>   
                </Link>
                <LogoutButton onClick={startLogout}>Logout</LogoutButton>
            </HeaderContent>      
        </ContentContainer>
    </PageHeader>    
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});


export default connect(undefined, mapDispatchToProps)(Header);

