'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import './search.scss';
import {getArtistDetails} from '@/api/searchArtist';

export const Search = () => {
    return (
        <Box sx={{ height: '100vh' }}>
            <Stack direction='row' justifyContent='center' useFlexGap flexWrap="wrap">
                <article id='profile' className="profile">
                    <div className="profile-image">
                        <Image alt='Artist' width={175}
                            height={175} src="https://e-cdns-images.dzcdn.net/images/artist/712f71a2a10dc7c9e0f32dde114ed6b6/1000x1000-000000-80-0-0.jpg" />
                    </div>
                    <h2 className="profile-username">Davido</h2>
                    <small className="profile-user-handle">3,000 Fans</small>
                    <small className="profile-user-handle">6,000 ALbums</small>
                    <div className="profile-actions">
                        <button onClick={()=>getArtistDetails('eminem')} className="btn btn--primary">View Artist</button>
                    </div>
                </article>
            </Stack>
        </Box>
    );
}