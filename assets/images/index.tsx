import Image from 'next/image';
import Box from '@mui/material/Box';
import backgroundImage from './backgroundImage.jpg';

export const BackgroundImage = () => {
    return (
        <Box>
            <Image
                src={backgroundImage}
                alt="Picture of the artist"
                layout="fill"
                objectFit="cover"
            />
            <Box
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.3)', // Adjust the opacity (last value) to control the darkness
                }}
            />
        </Box>
    )
}