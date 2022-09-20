import { Button, Box, ListItemText, Drawer } from "@mui/material";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ExploreButton = styled(Button)`
    text-transform: none !important;
    color: #fff !important;
    font-family: inherit !important;
    z-index: 1201;
`

export const DrawerWrapper = styled(Drawer)`
    .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop{
        background-color: unset !important;
    }
    .css-4t3x6l-MuiPaper-root-MuiDrawer-paper{
        background-color: unset !important;
        height: calc(100% - 128px);
        top: 63px;
    }
`

export const DrawerBox = styled(Box)`
    color: #fff;
    background-color: #1d1d1d;
    width: 250px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .css-h4y409-MuiList-root{
        width: 100%;
    }
    ul li a {
        width: 100%;
        padding: 5px 32px;
        padding-right: 0;
    }
    ul li a.active{
        color: #fff;
    }
        
    
`

export const LinkItemText = styled(ListItemText)`
    .css-10hburv-MuiTypography-root {
        font-family: inherit;
        font-size: 14px;
        :hover {
            font-size: 16px;
            transition: all 225ms ease;
        }
        transition: all 225ms ease;
    }
`

export const LinkItem = styled(NavLink)`
    text-decoration: none;
    color: #999;
    :hover {
        color: #fff;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 5px;
    }
`