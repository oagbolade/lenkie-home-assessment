'use client';
import React from 'react';
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import { useSearchArtist } from '@/api/useApi';
import { Loading } from '@/Components/Loader/Loading';
import { profile, profileImage, profileUsername, profileActions, btn, btnPrimary } from './styles';

export const Search = () => {
    const searchParams = useSearchParams();
    const name: string = searchParams.get('name') as string;
    const url = `https://api.deezer.com/search?q=${name}&limit=10`;
    const { data, isLoading } = useSearchArtist(url, name);

    return (
        <Box sx={{ height: '100%', background: 'black' }}>
            {isLoading ? <Loading /> :
                <Stack sx={{ marginTop: '50px' }} direction='row' justifyContent='center' useFlexGap flexWrap="wrap">
                    {data && data.data.map(({ artist }: any, index: number) =>
                    (<article style={{ ...profile }} key={index}>
                        <div style={{ ...profileImage }}>
                            <Image alt='Artist' width={175}
                                height={175} src={artist.picture_medium} />
                        </div>
                        <h2 style={{ ...profileUsername }}>{artist.name}</h2>
                        <div style={{ ...profileActions }}>
                            <Link style={{ ...btn, ...btnPrimary }} href={{ pathname: '/artist', query: { id: artist.id } }}>View Artist</Link>
                        </div>
                    </article>)
                    )}
                </Stack>
            }
        </Box>
    );
}