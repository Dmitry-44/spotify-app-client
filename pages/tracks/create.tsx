import React,{useState} from 'react';
import StepWrapper from '../../components/StepWrapper';
import MainLayout from '../../layouts/MainLayout';
import {Grid,Button} from '@mui/material';

const create = () => {
    const [activeStep, setActiveStep] = useState(0)

    const next = () => {
        setActiveStep( prev => prev + 1)
    }
    const prev = () => {
        setActiveStep( prev => prev - 1)
    }
    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                <h1>Загрузка трека</h1>
            </StepWrapper>
            <Grid container justifyContent='space-between'>
                <Button onClick={prev}>Назад</Button>
                <Button onClick={next}>Вперед</Button>
            </Grid>
        </MainLayout>
    );
};

export default create;