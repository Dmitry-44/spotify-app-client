import React from 'react';
import {ITrack} from '../../types/track';
import MainLayout from '../../layouts/MainLayout';
import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';


const TrackPage = () => {
    const router = useRouter()
    const track: ITrack = {_id: '1', name: 'MOW', artist: 'Gunna', text: 'moowowo', listens: 40, audio:'', picture:'https://upload.wikimedia.org/wikipedia/ru/5/53/Wunna_%28Deluxe%29.png', comments: []};
    return (
        <MainLayout>
            <Button 
            variant={'outlined'}
            style={{fontSize: 22}}
            onClick={()=> router.push('/tracks')}
            >
                К трекам
            </Button>
            <Grid container style={{margin: '20px 0px'}}>
                <img src={track.picture} width={200} height={200} />
                <div style={{margin: '20px 0px 20px 15px'}}>
                    <h1>Исполнитель - {track.artist}</h1>
                    <h2>Трек - {track.name}</h2>
                    <h4>Прослушиваний - {track.listens}</h4>
                </div>
            </Grid>
            <h4>Текст трека</h4>
            <p>{track.text}</p>
            <h3>Комментарии</h3>
            <Grid container>
                <TextField
                    label="Ваше имя"
                    fullWidth
                    style={{margin: '8px auto'}}
                />
                <TextField
                    label="Комментарий..."
                    style={{margin: '8px auto'}}
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button>Отправить</Button>
            </Grid>
            <div>
                {track.comments.map(comment => 
                    <div>
                        <div>Автор - {comment.username}</div>
                        <div>Комментарий - {comment.text}</div>
                    </div>
                )}
            </div>

        </MainLayout>
    );
};

export default TrackPage;