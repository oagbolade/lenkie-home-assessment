'use client';
import React from 'react';
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import { useSearchArtist } from '@/api/useApi';
import { NavBar } from '@/Components/NavBar';
import { Loading } from '@/Components/Loader/Loading';
import './search.scss';

export const Search = () => {
    const searchParams = useSearchParams();
    const name: string = searchParams.get('name') as string;
    const url = `https://api.deezer.com/search?q=${name}&limit=10`;
    const { data, isLoading } = useSearchArtist(url, name);

    return (
        <Box sx={{ height: '100%', background: 'black' }}>
            <NavBar />
            {isLoading : <Loading /> :
            <Stack sx={{ marginTop: '50px' }} direction='row' justifyContent='center' useFlexGap flexWrap="wrap">
                {data && data.data.map(({ artist }: any, index: number) =>
                (<article key={index} id='profile' className="profile">
                    <div className="profile-image">
                        <Image alt='Artist' width={175}
                            height={175} src={artist.picture_medium} />
                    </div>
                    <h2 className="profile-username">{artist.name}</h2>
                    <div className="profile-actions">
                        <Link href={{ pathname: '/artist', query: { id: artist.id } }} className="btn btn--primary">View Artist</Link>
                    </div>
                </article>)
                )}
            </Stack>
}
        </Box>
    );
}