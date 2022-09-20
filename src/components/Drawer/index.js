import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ExploreButton, DrawerBox, LinkItemText, DrawerWrapper, LinkItem } from './DrawerElement';
import { data } from "./DrawerUtils";

export const AppDrawer = ({buttonName, openFrom }) => {

    const [drawerState, setDrawerState] = useState(false);

    const toggleDrawer = (open) => {
        setDrawerState(open);
    };

    const list = () => (
        <DrawerBox
            role="presentation"
        >
            <List>
                {data.listItem.map(({text, path}, index) => (
                    <ListItem key={index} disablePadding onClick={() => toggleDrawer(false)}>
                        <LinkItem to={`/${path}`}>
                            <LinkItemText primary={text} />
                        </LinkItem>
                    </ListItem>
                ))}
            </List>
        </DrawerBox>
    );
    return (
        <>
            <ExploreButton onClick={() => toggleDrawer(!drawerState)}>{buttonName}</ExploreButton>
            <DrawerWrapper
                anchor={openFrom}
                open={drawerState}
            >
                {list('left')}
            </DrawerWrapper>
        </>
    )
}
