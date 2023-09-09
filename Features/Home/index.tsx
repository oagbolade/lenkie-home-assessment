import React from 'react';
import { CloudIcon } from '@/assets/svg';
import { BackgroundImage } from '@/assets/images';
import './home.scss';
import { Typography } from '@mui/material';

export const Home = () => {
    return (
        <>
            <BackgroundImage />
            <Typography sx={{ position: 'relative', color: 'white' }}>Search our database of Artists</Typography>
            <div className="search">
                <input type="text" placeholder="Search Artist" />
                <div className="symbol">
                    <svg className="cloud">
                        <use xlinkHref="#cloud" />
                    </svg>
                    <svg className="lens">
                        <use xlinkHref="#lens" />
                    </svg>
                </div>
            </div>
            <CloudIcon />
        </>
    )
}
