import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

type Props = {
    albumCover: string;
    key: number;
}

export const Albums = ({ albumCover, key }: Props) => {
    const albumYear = false;
    return (
        <Box key={key}>
            <Image style={{ borderRadius: '10px' }} alt='Artist' width={175}
                height={175} src={albumCover} />
            {albumYear && (<><Typography sx={{ color: 'white', fontWeight: 600, fontSize: '14px' }}>In my room</Typography>
                <Typography sx={{ color: 'white', fontWeight: 400, fontSize: '12px' }}>2023</Typography></>)}
        </Box>
    )
}
