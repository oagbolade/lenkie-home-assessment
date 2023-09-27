'use client'
import React, { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeProvider } from '@mui/material/styles';
import {Search, StyledInputBase, darkTheme} from './styles';

export const NavBar = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
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