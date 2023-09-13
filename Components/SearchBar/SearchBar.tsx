import { useState } from "react";
import Link from 'next/link'
import { SearchOutlined } from "@mui/icons-material";
import {
    Divider,
    InputBase,
    InputBaseProps,
    Paper,
} from "@mui/material";

type Props = {
    inputProps?: InputBaseProps;
};

export const SearchBar = (props: Props) => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <Paper
            elevation={3}
            sx={{ zIndex: '2', display: "flex", alignItems: "center", px: 4, py: 1 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                }}
                {...props.inputProps}
            />
            <Divider sx={{ height: 28, mx: 0.5 }} orientation="vertical" />
            <Link href={{ pathname: '/search', query: { name: searchTerm } }}>
                <SearchOutlined />
            </Link>
        </Paper>
    );
};
