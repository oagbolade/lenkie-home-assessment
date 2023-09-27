import React from 'react';
import Link from 'next/link'
import Box from '@mui/material/Box';
import Image from 'next/image';
import { profile, profileImage, profileUsername, profileActions, btn, btnPrimary } from './styles';

interface ArtistI {
    picture_medium: string;
    name: string;
    id: number;
}

type Props = {
    artist: ArtistI;
    key: number;
}

export const ArtistPreview = ({ artist, key }: Props) => {
  return (
      <Box sx={{ ...profile }} key={key}>
          <Box sx={{ ...profileImage }}>
              <Image alt='Artist' width={175}
                  height={175} src={artist.picture_medium} />
          </Box>
          <h2 style={{ ...profileUsername }}>{artist.name}</h2>
          <div style={{ ...profileActions }}>
              <Link style={{ ...btn, ...btnPrimary }} href={{ pathname: '/artist', query: { id: artist.id } }}>View Artist</Link>
          </div>
      </Box>
  )
}
