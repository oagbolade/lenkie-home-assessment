"use client"
import React from 'react';
import { BackgroundImage } from '@/assets/images';
import { Typography } from '@mui/material';
import { SearchBar } from '@/Components/SearchBar';
import './home.scss';

export const Home = () => {
    return (
        <>
            <BackgroundImage />
            <Typography sx={{ position: 'relative', color: 'white' }}>Search our Database of Artists</Typography>
            <SearchBar />
        </>
    )
}
