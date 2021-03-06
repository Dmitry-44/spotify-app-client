import { Container } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';

const MainLayout = ({children}) => {
    return (
        <>
            <Navbar/>
            <Container style={{margin:'90px auto'}}>
                {children}
            </Container>
        </>
    );
};

export default MainLayout;