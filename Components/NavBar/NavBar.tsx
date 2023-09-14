'use client'
import React, { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: 'auto',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: '10px',
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#467DFF',
        },
    },
});

export const NavBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const pathname: string | null = usePathname();

    if (pathname === '/') {
        return;
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
                <AppBar color='primary' position="fixed">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ flexGrow: 1, display: { sm: 'none', xs: 'block' } }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            <Link href='/'>
                                Music App
                            </Link>
                        </Typography>
                        <Search>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                }}
                            />
                            <Link href={{ pathname: '/search', query: { name: searchTerm } }}>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                >
                                    <SearchIcon />
                                </IconButton>
                            </Link>
                        </Search>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </Box>
    );
}