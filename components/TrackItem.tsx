import { Card, IconButton, Grid } from '@mui/material';
import React from 'react';
import { ITrack } from '../types/track';
import styles from '../styles/TrackItem.module.sass'
import { Pause, PlayArrow, Delete} from '@mui/icons-material';

interface TrackItemProps {
    track: ITrack,
    active?: boolean,
}


const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
    return (
        <Card className={styles.track}> 
            <IconButton>
                {active 
                    ? <Pause />
                    : <PlayArrow />
                }
            </IconButton>
            <img width={70} height={70} src={track.picture} />
            <Grid container direction='column' style={{margin: '0 20px', width: 200}}>
                <div>{track.name}</div>
                <div style={{fontSize:12, color: 'grey'}}>{track.artist}</div>
            </Grid>
            {active && <div>2:15 / 3:20</div>}
            <IconButton style={{marginLeft:'auto'}}>
                <Delete/>
            </IconButton>
        </Card>
    );
};

export default TrackItem;