import React from 'react';
import {IconButton, Grid} from '@mui/material';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import styles from '../styles/Player.module.sass';
import {ITrack} from '../types/track'
import TrackProgress from './TrackProgress';

const Player = () => {
    const active=false;
    const track: ITrack = {_id: '1', name: 'MOW', artist: 'Gunna', text: 'moowowo', listens: 40, audio:'', picture:'https://upload.wikimedia.org/wikipedia/ru/5/53/Wunna_%28Deluxe%29.png', comments: []};
    return (
        <div className={styles.player}>
            <IconButton onClick={e => e.stopPropagation()}>
                {active 
                    ? <Pause />
                    : <PlayArrow />
                }
            </IconButton>
            <Grid container direction='column' style={{margin: '0 20px', width: 200}}>
                <div>{track.name}</div>
                <div style={{fontSize:12, color: 'grey'}}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={()=> {}} />
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <TrackProgress left={0} right={100} onChange={()=> {}} />
        </div>
    );
};

export default Player;