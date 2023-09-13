import React from 'react'
import Typography from '@mui/material/Typography';

type Props = {
    title: string;
}

export const MainTitle = ({ title }: Props) => {
    return (
                <Typography mb={1} sx={{ fontSize: '18px', fontWeight: 400, color: 'white', textAlign: { xs: 'center' } }}>{title}</Typography>

    )
}
