'use client'
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useSearchParams } from 'next/navigation';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { NavBar } from '@/Components/NavBar';
import { Loading } from '@/Components/Loader/Loading';
import { getTopTracks } from '@/utils/getTopTracks';
import { getAlbums } from '@/utils/getAlbums';
import './artist.scss';
import 'react-loading-skeleton/dist/skeleton.css'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });

export const Artist = () => {
    const proxy = "https://cors-server.fly.dev/";
    const searchParams = useSearchParams();
    const id: string = searchParams.get('id') as string;
    const url = `https://api.deezer.com/artist/${id}`;

    const [data, setData] = useState<any>(null);
    const [trackdata, setTrackData] = useState<any>(null);
    const [albumdata, setAlbumData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isTrackLoading, setTrackLoading] = useState(false);
    const [error, setError] = useState<any>(null);
   
    const fetchData = () => {
        setIsLoading(true);
        setTrackLoading(true);
        axios.get(`${proxy}${url}`).then((response) => {
            setData(response.data);
            setIsLoading(false);
            return response.data.tracklist;
        }).then((response) => {
            axios.get(`${proxy}${response}`).then((trackresponse) => {
                setTrackData(getTopTracks(trackresponse.data.data));
                setAlbumData(getAlbums(trackresponse.data.data));
                setTrackLoading(false);
            });
        }).catch((error) => {
            setError(error);
            setIsLoading(false);
            setTrackLoading(false);
        });
        setIsLoading(true);
        setTrackLoading(true);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Box sx={{ height: { xs: '100%', md: '100vh' }, background: 'black' }}>
            <NavBar />
            <Box sx={{ paddingBottom: '50px' }} />
            <article className="profile">
                <Stack spacing={3} direction={{ md: 'row', xs: 'column' }} justifyContent='flex-start' >
                    <Box ml={3}>
                        {isLoading ?
                            <Loading /> :
                            <>
                                <Box className="profile-image">
                                    <Image alt='Artist' width={175}
                                        height={175} src={data?.picture_medium} />
                                </Box>
                                <h2 className="profile-username">{data?.name}</h2>
                                <div className="profile-user-handle">{data?.nb_fan.toLocaleString("en-US")} Fans</div>
                                <div className="profile-user-handle">{data?.nb_album.toLocaleString("en-US")} Albums</div>
                            </>
                        }
                    </Box>
                    {isTrackLoading? <Loading /> :
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography sx={{ textAlign: { xs: 'center' } }}>Top Five Tracks</Typography>
                            <ThemeProvider theme={darkTheme}>
                                {trackdata?.map((track, index) => (
                                    <Box
                                        key={index}
                                        mb={1}
                                        sx={{
                                            display: 'grid',
                                            gridTemplateColumns: { md: '1fr' },
                                        }}
                                    >
                                        <Item elevation={3}>
                                            {track.title}
                                        </Item>
                                    </Box>
                                ))}
                            </ThemeProvider>
                        </Grid>
                    </Grid>
}
                </Stack>
            </article>
                    {isTrackLoading? <Loading /> :

            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', maxWidth: '900px', margin: '20px auto', paddingBottom: '50px', paddingLeft: { md: '50px' } }}>
                <Typography sx={{ color: 'white', textAlign: { xs: 'center' } }}>Albums</Typography>
                <Stack spacing={4} direction='row' justifyContent={{ md: 'flex-start', xs: 'center' }} useFlexGap flexWrap="wrap">
                    {albumdata?.map(({ album }, index) => (
                        <Box key={index}>
                            <Image style={{ borderRadius: '10px' }} alt='Artist' width={175}
                                height={175} src={album.cover_medium} />
                            <Typography sx={{ color: 'white', fontWeight: 600, fontSize: '14px' }}>In my room</Typography>
                            <Typography sx={{ color: 'white', fontWeight: 400, fontSize: '12px' }}>2023</Typography>
                        </Box>
                    ))}
                </Stack>
            </Box>
}
        </Box>
    );
}