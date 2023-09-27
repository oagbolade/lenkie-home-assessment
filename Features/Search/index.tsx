'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useSearchArtist } from '@/api/useApi';
import { Loading } from '@/Components/Loader/Loading';
import { ArtistPreview } from './ArtistPreview';

export const Search = () => {
    const searchParams = useSearchParams();
    const name: string = searchParams.get('name') as string;
    const url = `https://api.deezer.com/search?q=${name}&limit=10`;
    const { data, isLoading } = useSearchArtist(url, name);

    return (
        <Box sx={{ height: '100%', background: 'black' }}>
            {isLoading ? <Loading /> :
                <Stack sx={{ marginTop: '50px' }} direction='row' justifyContent='center' useFlexGap flexWrap="wrap">
                    {data && data.data.map(({ artist }: any, index: number) => <ArtistPreview key={index} artist={artist} />)}
                </Stack>
            }
        </Box>
    );
}