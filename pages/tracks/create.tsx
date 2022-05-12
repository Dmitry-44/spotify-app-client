import React,{useState} from 'react';
import StepWrapper from '../../components/StepWrapper';
import LoadTrackInfo from '../../components/LoadTrackInfo';
import FileUpload from '../../components/FileUpload';
import MainLayout from '../../layouts/MainLayout';
import {Grid,Button} from '@mui/material';

const create = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [image, setImage] = useState(null)
    const [audio, setAudio] = useState(null)

    const next = () => {
        if(activeStep !== 2) {
            setActiveStep( prev => prev + 1)
        }
    }
    const prev = () => {
        setActiveStep( prev => prev - 1)
    }
    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep==0 && 
                    <LoadTrackInfo/>
                }
                {activeStep==1 && 
                    <FileUpload setFile={setImage} accept={'image/*'}>
                        <Button>Загрузить изображение</Button>
                    </FileUpload>
                }
                {activeStep==2 && 
                    <FileUpload setFile={setAudio} accept={'audio/*'}>
                        <Button>Загрузить аудио</Button>
                    </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent='space-between'>
                <Button disabled={activeStep===0} onClick={prev}>Назад</Button>
                <Button onClick={next}>Вперед</Button>
            </Grid>
        </MainLayout>
    );
};

export default create;