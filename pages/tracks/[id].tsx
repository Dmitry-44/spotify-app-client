import React from 'react';
import {ITrack} from '../../types/track';
import MainLayout from '../../layouts/MainLayout';


const TrackPage = () => {
    const track: ITrack = {_id: '1', name: 'MOW', artist: 'Gunna', text: 'moowowo', listens: 40, audio:'', picture:'https://upload.wikimedia.org/wikipedia/ru/5/53/Wunna_%28Deluxe%29.png', comments: []};
    return (
        <MainLayout>
            {track.name}
        </MainLayout>
    );
};

export default TrackPage;