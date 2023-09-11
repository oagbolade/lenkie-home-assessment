'use client'
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import './artist.scss';
import { getArtistDetails } from '@/api/searchArtist';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });

export const Artist = () => {
    return (
        <Box sx={{ height: '100vh' }}>
                <article className="profile">
            <Stack spacing={3} direction={{ md: 'row', xs: 'column' }} justifyContent='flex-start'>
                <Box>
                    <div className="profile-image">
                        <Image alt='Artist' width={175}
                            height={175} src="https://e-cdns-images.dzcdn.net/images/artist/712f71a2a10dc7c9e0f32dde114ed6b6/1000x1000-000000-80-0-0.jpg" />
                    </div>
                    <h2 className="profile-username">Davido</h2>
                    <small className="profile-user-handle">3,000 Fans</small>
                    <small className="profile-user-handle">6,000 ALbums</small>
                    <div className="profile-actions">
                        <button onClick={() => getArtistDetails('eminem')} className="btn btn--primary">View Artist</button>
                    </div>
</Box>
                    <Grid container>
                        <Grid item xs={12}>
                            <ThemeProvider theme={darkTheme}>
                                <Box
                                mb={1}
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: { md: '1fr' },
                                    }}
                                >
                                    <Item elevation={3}>
                                        {`Track 1`}
                                    </Item>
                                </Box>
                                <Box
                                mb={1}

                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: { xs: '1fr' },
                                    }}
                                >
                                    <Item elevation={3}>
                                        {`Track 2`}
                                    </Item>
                                </Box>
                                <Box
                                mb={1}

                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: { xs: '1fr' },
                                    }}
                                >
                                    <Item elevation={3}>
                                        {`Track 3`}
                                    </Item>
                                </Box>
                                <Box
                                mb={1}

                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: { xs: '1fr' },
                                    }}
                                >
                                    <Item elevation={3}>
                                        {`Track 4`}
                                    </Item>
                                </Box>
                                <Box
                                mb={1}
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: { xs: '1fr' },
                                    }}
                                >
                                    <Item elevation={3}>
                                        {`Track 5`}
                                    </Item>
                                </Box>
                            </ThemeProvider>
                        </Grid>
                    </Grid>
            </Stack>

                </article>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', maxWidth: '900px', margin: '0 auto', paddingBottom: '50px', paddingLeft: {md: '50px'} }}>
                <Typography sx={{textAlign: {xs: 'center'}}}>Albums</Typography>
                <Stack spacing={4} direction='row' justifyContent={{ md: 'flex-start', xs: 'center' }} useFlexGap flexWrap="wrap">
                    <Box>
                        <Image style={{ borderRadius: '10px' }} alt='Artist' width={175}
                            height={175} src="https://e-cdns-images.dzcdn.net/images/artist/712f71a2a10dc7c9e0f32dde114ed6b6/1000x1000-000000-80-0-0.jpg" />
                        <Typography>In my room</Typography>
                        <Typography>2023</Typography>
                    </Box>
                    <Box>
                        <Image style={{ borderRadius: '10px' }} alt='Artist' width={175}
                            height={175} src="https://e-cdns-images.dzcdn.net/images/artist/712f71a2a10dc7c9e0f32dde114ed6b6/1000x1000-000000-80-0-0.jpg" />
                        <Typography>In my room</Typography>
                        <Typography>2023</Typography>
                    </Box>
                    <Box>
                        <Image style={{ borderRadius: '10px' }} alt='Artist' width={175}
                            height={175} src="https://e-cdns-images.dzcdn.net/images/artist/712f71a2a10dc7c9e0f32dde114ed6b6/1000x1000-000000-80-0-0.jpg" />
                        <Typography>In my room</Typography>
                        <Typography>2023</Typography>
                    </Box>
                    <Box>
                        <Image style={{ borderRadius: '10px' }} alt='Artist' width={175}
                            height={175} src="https://e-cdns-images.dzcdn.net/images/artist/712f71a2a10dc7c9e0f32dde114ed6b6/1000x1000-000000-80-0-0.jpg" />
                        <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>In my room</Typography>
                        <Typography sx={{ fontWeight: 400, fontSize: '12px' }}>2023</Typography>
                    </Box>
                    <Box>
                        <Image style={{ borderRadius: '10px' }} alt='Artist' width={175}
                            height={175} src="https://e-cdns-images.dzcdn.net/images/artist/712f71a2a10dc7c9e0f32dde114ed6b6/1000x1000-000000-80-0-0.jpg" />
                        <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>In my room</Typography>
                        <Typography sx={{ fontWeight: 400, fontSize: '12px' }}>2023</Typography>
                    </Box>
                    <Box>
                        <Image style={{ borderRadius: '10px' }} alt='Artist' width={175}
                            height={175} src="https://e-cdns-images.dzcdn.net/images/artist/712f71a2a10dc7c9e0f32dde114ed6b6/1000x1000-000000-80-0-0.jpg" />
                        <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>In my room</Typography>
                        <Typography sx={{ fontWeight: 400, fontSize: '12px' }}>2023</Typography>
                    </Box>
                    <Box>
                        <Image style={{ borderRadius: '10px' }} alt='Artist' width={175}
                            height={175} src="https://e-cdns-images.dzcdn.net/images/artist/712f71a2a10dc7c9e0f32dde114ed6b6/1000x1000-000000-80-0-0.jpg" />
                        <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>In my room</Typography>
                        <Typography sx={{ fontWeight: 400, fontSize: '12px' }}>2023</Typography>
                    </Box>
                    <Box>
                        <Image style={{ borderRadius: '10px' }} alt='Artist' width={175}
                            height={175} src="https://e-cdns-images.dzcdn.net/images/artist/712f71a2a10dc7c9e0f32dde114ed6b6/1000x1000-000000-80-0-0.jpg" />
                        <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>In my room</Typography>
                        <Typography sx={{ fontWeight: 400, fontSize: '12px' }}>2023</Typography>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}