import { Box, Button, Card, Grid } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';
import MainLayout from '../../layouts/MainLayout';
import {ITrack} from '../../types/track'
import Tracklist from '../../components/Tracklist';

const Index = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        {_id: '1', name: 'MOW', artist: 'Gunna', text: 'moowowo', listens: 40, audio:'', picture:'https://upload.wikimedia.org/wikipedia/ru/5/53/Wunna_%28Deluxe%29.png', comments: []},
        {_id: '2', name: 'Cooler than a bitch', artist: 'Gunna', text: 'moowosaswo', listens: 50, audio:'', picture:'https://upload.wikimedia.org/wikipedia/ru/5/53/Wunna_%28Deluxe%29.png', comments: []},
        {_id: '3', name: 'Wunna', artist: 'Gunna', text: 'ppdsp', listens: 1000, audio:'', picture:'https://upload.wikimedia.org/wikipedia/ru/5/53/Wunna_%28Deluxe%29.png', comments: []}
    ];
    return (
        <>
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>Список треков</h1>
                            <Button onClick={() => router.push('tracks/create')}>Загрузить</Button>
                        </Grid>
                    </Box>
                </Card>
            </Grid>
            <Tracklist tracks={tracks}/>
        </MainLayout>
        </>
    );
};

export default Index;