"use client"
import React, { useEffect } from 'react';
import { CloudIcon } from '@/assets/svg';
import { BackgroundImage } from '@/assets/images';
import { Typography } from '@mui/material';
import { searchArtist } from '@/api/searchArtist';
import './home.scss';

export const Home = () => {
    useEffect(() => {
        // searchArtist('eminem');
    }, [])

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
