import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));

type Props = {
    trackTitle: string;
    key: number;
}
export const Tracks = ({ trackTitle, key }: Props) => {
    return (
        <Box
            key={key}
            mb={1}
            sx={{
                display: 'grid',
                gridTemplateColumns: { md: '1fr' },
            }}
        >
            <Item elevation={3}>
                {trackTitle}
            </Item>
        </Box>
    )
}
