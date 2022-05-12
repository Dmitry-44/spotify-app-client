import React from 'react';
import { Grid, TextField } from '@mui/material';

const LoadTrackInfo = () => {
    return (
        <Grid container direction={'column'} style={{padding:20}}>
            <TextField
                style={{marginTop:10}}
                label={"Название трека"}
            />
            <TextField
                style={{marginTop:10}}
                label={"Исполнитель"}
            />
            <TextField
                style={{marginTop:10}}
                label={"Текст трека"}
                multiline
                rows={3}
            />

        </Grid>
    );
};

export default LoadTrackInfo