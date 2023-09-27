'use client'
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Loading } from '@/Components/Loader/Loading';
import { MainTitle } from '@/Components/Typography/MainTitle';
import { useApi } from '@/api/useApi';
import { profile, profileImage, profileUserHandle, profileUsername } from '@/Features/Search/styles';
import { Tracks } from './Tracks';
import { Albums } from './Albums';

const darkTheme = createTheme({ palette: { mode: 'dark' } });

export const Artist = () => {
    const searchParams = useSearchParams();
    const id: string = searchParams.get('id') as string;
    const url = `https://api.deezer.com/artist/${id}`;
    const { data, trackdata, albumdata, isLoading, isTrackLoading } = useApi(url, true);

    return (
        <Box sx={{ height: { xs: '100%', md: '100%' }, background: 'black' }}>
            <Box sx={{ paddingBottom: '50px' }} />
            <Box sx={{ ...profile }}>
                <Stack spacing={3} direction={{ md: 'row', xs: 'column' }} >
                    <Box>
                        {isLoading ?
                            <Loading />
                            :
                            <>
                                <Box sx={{ marginLeft: { xs: '20px' }, marginTop: { md: '20px' }, ...profileImage }}>
                                    <Image alt='Artist' width={175}
                                        height={175} src={data?.picture_medium} />
                                </Box>
                                <h2 style={{ ...profileUsername }}>{data?.name}</h2>
                                <div style={{ ...profileUserHandle }}>{data?.nb_fan.toLocaleString("en-US")} Fans</div>
                                <div style={{ ...profileUserHandle }}>{data?.nb_album.toLocaleString("en-US")} Albums</div>
                            </>
                        }
                    </Box>
                    {isTrackLoading ? <Loading /> :
                        <Grid container>
                            <Grid item xs={12}>
                                <MainTitle title='Top Five Tracks' />
                                <ThemeProvider theme={darkTheme}>
                                    {trackdata?.map((track: any, index: number) => (
                                        <Tracks key={index} trackTitle={track.title} />
                                    ))}
                                </ThemeProvider>
                            </Grid>
                        </Grid>
                    }
                </Stack>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', maxWidth: '900px', margin: '20px auto', marginBottom: '0', paddingBottom: '50px', paddingLeft: { md: '50px' } }}>
                {isTrackLoading ? <Loading /> :
                    <>
                        <Box sx={{ marginRight: { md: '40px' } }}>
                            <MainTitle title='Albums' />
                        </Box>
                        <Stack spacing={4} direction='row' justifyContent={{ md: 'flex-start', xs: 'center' }} useFlexGap flexWrap="wrap">
                            {albumdata?.map(({ album }: any, index: number) => (
                                <Albums key={index} albumCover={album.cover_medium} />
                            ))}
                        </Stack>
                    </>
                }
            </Box>
        </Box>
    );
}