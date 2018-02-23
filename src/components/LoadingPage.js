import React from 'react';
import styled from "styled-components";

const Loader = styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    justify-content: center;
    align-items:center;
`;

const Image = styled.img`
     height: 6rem;
     width: 6rem;
`;

const LoadingPage = () => (
    <Loader>
        <Image src="/images/loader.gif" />
    </Loader>
);

export default LoadingPage;
