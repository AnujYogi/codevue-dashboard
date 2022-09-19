import styled from "styled-components";
import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled(AppBar)`
    background-color: #1d1d1d !important;
    opacity: 1;
    transition: all 225ms ease !important;
`

export const Header = styled(Toolbar)`
    justify-content: space-between;
    @media screen and (min-width: 600px) {
        padding-left: 32px !important;
        padding-right: 32px !important;
    }
`

export const HomeLink = styled(Link)`
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    z-index: 1201;
`