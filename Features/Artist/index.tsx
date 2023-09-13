'use client'
import React from 'react';
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
import { MainTitle } from '@/Components/Typography/MainTitle';
import { useApi } from '@/api/useApi';
import './artist.scss';
import 'react-loading-skeleton/dist/skeleton.css';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });

export const Artist = () => {
    const albumYear = false;
    const searchParams = useSearchParams();
    const id: string = searchParams.get('id') as string;
    const url = `https://api.deezer.com/artist/${id}`;
    const { data, trackdata, albumdata, isLoading, isTrackLoading } = useApi(url);

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
                                <Box sx={{ marginLeft: { xs: '20px' }, marginTop: { md: '20px' } }} className="profile-image">
                                    <Image alt='Artist' width={175}
                                        height={175} src={data?.picture_medium} />
                                </Box>
                                <h2 className="profile-username">{data?.name}</h2>
                                <div className="profile-user-handle">{data?.nb_fan.toLocaleString("en-US")} Fans</div>
                                <div className="profile-user-handle">{data?.nb_album.toLocaleString("en-US")} Albums</div>
                            </>
                        }
                    </Box>
                    {isTrackLoading ? <Loading /> :
                        <Grid container>
                            <Grid item xs={12}>
                                <MainTitle title='Top Five Tracks' />
                                <ThemeProvider theme={darkTheme}>
                                    {trackdata?.map((track: any, index: number) => (
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
            {isTrackLoading ? <Loading /> :

                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', maxWidth: '900px', margin: '20px auto', paddingBottom: '50px', paddingLeft: { md: '50px' } }}>
                    <MainTitle title='Albums' />
                    <Stack spacing={4} direction='row' justifyContent={{ md: 'flex-start', xs: 'center' }} useFlexGap flexWrap="wrap">
                        {albumdata?.map(({ album }: any, index: number) => (
                            <Box key={index}>
                                <Image style={{ borderRadius: '10px' }} alt='Artist' width={175}
                                    height={175} src={album.cover_medium} />
                                {albumYear && (<><Typography sx={{ color: 'white', fontWeight: 600, fontSize: '14px' }}>In my room</Typography>
                                    <Typography sx={{ color: 'white', fontWeight: 400, fontSize: '12px' }}>2023</Typography></>)}
                            </Box>
                        ))}
                    </Stack>
                </Box>
            }
        </Box>
    );
}